/* global module, require */
module.exports = (function () {
	"use strict";
	
    var globs = require("./data/globs");
	
    return {
        id: "htmlhint",
        name: "grunt-htmlhint",
        configuration: {
            options: {
                htmlhintrc: ".htmlhintrc"
            },
            src: globs.html
        }
    };
})();