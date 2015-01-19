/* global module */
module.exports = (function () {
    "use strict";

    var globs = require("./data/globs");
	
    return {
        id: "csslint",
        name: "grunt-contrib-csslint",
        configuration: {
            options: {
                csslintrc: ".csslintrc"
            },
            src: globs.css
        }
    };
})();