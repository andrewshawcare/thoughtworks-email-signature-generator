/* global module, require */
module.exports = (function () {
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
            less: {
                files: globs.less,
                tasks: ["less"]
            },
            css: {
                files: globs.css,
                tasks: ["csslint"]
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