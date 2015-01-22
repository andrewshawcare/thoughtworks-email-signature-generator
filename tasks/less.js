/* global module */
module.exports = (function () {
	"use strict";

	var globs = require("./data/globs");
	
	return {
        id: "less",
        name: "grunt-contrib-less",
        configuration: {
            development: {
                options: {
                    strictImports: true,
                    strictMath: true,
                    strictUnits: true
                },
                files: {
                    "./public/css/index.css": globs.less
                }
            }
        }
    };
})();