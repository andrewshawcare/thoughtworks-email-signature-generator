/* global require, process, __dirname, console */
require("newrelic");
var Express = require("express"),
    newrelic = require("newrelic"),
    compression = require("compression"),
    jade = require("jade"),
    port = Number(process.env.PORT || 5000),
    staticAssetsUrl = process.env.STATIC_ASSETS_URL || ".",
    server = new Express();

server.locals.newrelic = newrelic;

server.use(compression());
if (staticAssetsUrl === ".") {
    var serveStatic = require('serve-static');
    server.use(serveStatic(__dirname + "/public"));
}

server.set("views", __dirname + "/views");
server.engine("jade", jade.__express);

server.get("/", function (request, response) {
    "use strict";
    response.render("index.jade", {staticAssetsUrl: staticAssetsUrl});
});

server.listen(port);
console.log("Server listening on port " + port);
