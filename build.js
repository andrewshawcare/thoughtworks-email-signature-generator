// jshint -W033
(function () {
    "use strict";
    return {
        appDir: "./public",
        baseUrl: "./javascript",
        dir: "build",
        optimizeCss: "standard",
        paths: {
            requirejs: "../bower_components/requirejs/require",
            react: "../bower_components/react/react",
            text: "../bower_components/jsx-requirejs-plugin/js/text",
            jsx: "../bower_components/jsx-requirejs-plugin/js/jsx",
            JSXTransformer: "../bower_components/jsx-requirejs-plugin/js/JSXTransformer-0.10.0"
        },
        preserveLicenseComments: false,
        // Remove any occurrences of jsx! prefix for JSX imports
        onBuildWrite: function (moduleName, path, contents) {
            return contents.replace(/jsx!/g, '');
        },
        useStrict: true,
        modules: [
            {
                "name": "email_signature_generator",
                "exclude": ["jsx"]
            },
            {
                "name": "requirejs"
            }
        ]
    };
})()