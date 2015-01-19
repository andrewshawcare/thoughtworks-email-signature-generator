/* global module */
module.exports = (function () {
	"use strict";

	var globs = require("./data/globs");
	
	return {
        id: "less",
        name: "grunt-contrib-less",
        configuration: {
            options: {},
            src: globs.less
        }
    };
})();