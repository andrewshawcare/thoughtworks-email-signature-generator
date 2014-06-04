/* global require, process */
require("newrelic");
var NodeStatic = require('node-static'),
    file = new NodeStatic.Server('./public', {
        cache: 60 * 60 * 24 * 365,
        headers: {
            "Vary": "Accept-Encoding"
        }
    }),
    port = Number(process.env.PORT || 5000);

require('http').createServer(function (request, response) {
    "use strict";
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);