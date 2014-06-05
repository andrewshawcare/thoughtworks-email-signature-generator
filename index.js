/* global require, process, __dirname */
require("newrelic");
var Express = require("express"),
    Compression = require("compression"),
    port = Number(process.env.PORT || 5000),
    staticDirectory = process.env.NODE_ENV === "production" ? "/build" : "/public",
    maxAge = 1000 * 60 * 60 * 24 * 365,
    server = Express();

server.use(Compression());
server.use(Express.static(__dirname + staticDirectory, { maxAge: maxAge }));

server.listen(port);