/* global require, process, __dirname, console */
require("newrelic");
var Express = require("express"),
    newrelic = require("newrelic"),
    compression = require("compression"),
    serveStatic = require('serve-static'),
    jade = require("jade"),
    port = Number(process.env.PORT || 5000),
    staticAssetsUrl = process.env.STATIC_ASSETS_URL || ".",
    directory = process.env.NODE_ENV === "production" ? "/build" : "/public",
    server = new Express();

server.locals.newrelic = newrelic;

server.use(compression());
server.use(serveStatic(__dirname + directory));

server.set("views", __dirname + directory + "/jade");
server.engine("jade", jade.__express);

server.get("/", function (request, response) {
    "use strict";
    response.render("index.jade", {staticAssetsUrl: staticAssetsUrl});
});

server.listen(port);
console.log("Server listening on port " + port);
