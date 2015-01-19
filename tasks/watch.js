/* global module */
module.exports = (function (globs) {
    "use strict";
    
    var globs = require("./data/globs");
    
    return {
        id: "watch",
        name: "grunt-contrib-watch",
        configuration: {
            options: {
                livereload: true
            },
            javascript: {
                files: globs.javascript,
                tasks: ["jshint", "plato"]
            },
            json: {
                files: globs.json,
                tasks: ["jshint"]
            },
            css: {
                files: globs.css,
                tasks: ["csslint"]
            },
            less: {
                files: globs.less,
                tasks: ["less"]
            },
            html: {
                files: globs.html,
                tasks: ["htmlhint"]
            },
            jsx: {
                files: globs.jsx,
                tasks: ["shell:jsxhint"]
            }
        }
    };
})();