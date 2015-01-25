/* global module, require */
module.exports = (function () {
	"use strict";
	
	var fs = require("fs"),
        jshintrc = JSON.parse(fs.readFileSync("./.jshintrc")),
        globs = require("./data/globs");

	return {
        id: "plato",
        name: "grunt-plato",
        configuration: {
            options: {
                jshint: jshintrc
            },
            "reports/plato": globs.javascript
        }
    };
})();