/* global require, process, __dirname */
require("newrelic");
var Express = require("express"),
    Compression = require("compression"),
    port = Number(process.env.PORT || 5000),
    server = Express();

server.use(Compression());
server.use(Express.static(__dirname + "/public"));

server.listen(port);