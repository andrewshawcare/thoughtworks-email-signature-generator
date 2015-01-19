/* global module */
module.exports = (function () {
    "use strict";
    
    var globs = require("./data/globs");
	
    return {
        id: "jshint",
        name: "grunt-contrib-jshint",
        configuration: {
            options: {
                jshintrc: true
            },
            src: [].concat(globs.javascript, globs.json)
        }
    };
})();