/* global requirejs, require */
requirejs.config({
    baseUrl: "./javascript",
    paths: {
        react: "../bower_components/react/react",
        text: "../bower_components/jsx-requirejs-plugin/js/text",
        jsx: "../bower_components/jsx-requirejs-plugin/js/jsx",
        JSXTransformer: "../bower_components/jsx-requirejs-plugin/js/JSXTransformer-0.10.0"
    }
});

// jshint -W072
require([
    "react",
    "jsx!../jsx/application",
    "properties",
    "themes",
    "defaults"
], function (React, Application, properties, themes, defaults) {
    "use strict";
    /* global document */
    React.renderComponent(new Application({
        "languages": Object.keys(properties),
        "properties": properties,
        "themes": themes,
        "language": defaults.language,
        "theme": defaults.theme,
        "name": defaults.name,
        "title": defaults.title,
        "email": defaults.email,
        "telephone": defaults.telephone
    }), document.body);
});