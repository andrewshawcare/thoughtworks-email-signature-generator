FROM phusion/baseimage

EXPOSE 5000
EXPOSE 35729

ENV NODE_ENV=development
ENV STATIC_ASSETS_URL=.

RUN apt-get update && \
  apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_5.x | bash - && \
  apt-get install -y \
  build-essential \
  git \
  nodejs \
  ruby

RUN gem install foreman

RUN mkdir -p /src/app
WORKDIR /src/app

COPY . .

RUN npm install
RUN ./node_modules/.bin/bower --allow-root --config.interactive=false install

CMD ["foreman", "start"]
