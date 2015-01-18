/* global module */
module.exports = function (grunt) {
    "use strict";
    var baseDirectory = "./public/";
    var globs = {
        javascript: ["*.js", baseDirectory + "javascript/**/*.js"],
        jsx: [baseDirectory + "jsx/**.js"],
        json: [".htmlhintrc", ".jshintrc", "*.json"],
        css: [baseDirectory + "css/**/*.css"],
        less: [baseDirectory + "less/**/*.less"],
        html: [baseDirectory + "*.html"]
    };
    
    return {
        tasks: [
            {
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
            },
            {
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
            },
            {
                id: "jshint",
                name: "grunt-contrib-jshint",
                configuration: {
                    options: {
                        jshintrc: true
                    },
                    src: [].concat(globs.javascript, globs.json)
                }
            },
            {
                id: "less",
                name: "grunt-contrib-less",
                configuration: {
                    options: {},
                    src: globs.less
                }
            },
            {
                id: "csslint",
                name: "grunt-contrib-csslint",
                configuration: {
                    options: {
                        csslintrc: ".csslintrc"
                    },
                    src: globs.css
                }
            },
            {
                id: "htmlhint",
                name: "grunt-htmlhint",
                configuration: {
                    options: {
                        htmlhintrc: ".htmlhintrc"
                    },
                    src: globs.html
                }
            },
            {
                id: "plato",
                name: "grunt-plato",
                configuration: {
                    options: {
                        jshint: grunt.file.readJSON(".jshintrc")
                    },
                    "reports/plato": globs.javascript
                }
            }
        ],
        aggregateTasks: [
            {
                name: "test",
                tasks: [
                    "jshint",
                    "csslint",
                    "htmlhint",
                    "shell:jsxhint"
                ]
            },
            {
                name: "report",
                tasks: [
                    "plato"
                ]
            }
        ]
    };
};