/* global require, process, __dirname */
require("newrelic");
var Express = require("express"),
    Compression = require("compression"),
    port = Number(process.env.PORT || 5000),
    server = Express(),
    maxAge = 1000 * 60 * 60 * 24 * 365,
    directory = __dirname + (server.settings.env === "production" ? "/build" : "/public");

server.use(Compression());
server.use(Express.static(directory, { maxAge: maxAge }));

server.listen(port);