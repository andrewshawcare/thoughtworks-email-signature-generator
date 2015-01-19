/* global module */
module.exports = (function () {
    "use strict";
    
    var globs = require("./data/globs");
    
    return {
        id: "shell",
        name: "grunt-shell",
        configuration: {
            options: {
                stdout: true,
                stderr: true,
                failOnError: true
            },
            jsxhint: {
                command: "node ./node_modules/jsxhint/cli " +
                    "-c ./.jsxhintrc " +
                    globs.jsx.join(" ")
            },
            build: {
                command: "node ./node_modules/requirejs/bin/r.js -o ./build.js"
            }
        }
    };
})();