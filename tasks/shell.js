/* global module, require */
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
                command: "./node_modules/.bin/r.js -o ./build.js"
            },
            deploy: {
                command: "node ./index.js"
            }
        }
    };
})();
