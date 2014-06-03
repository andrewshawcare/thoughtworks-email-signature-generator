/* global requirejs, require */
requirejs.config({
    paths: {
        react: "../bower_components/react/react",
        jsx: "../bower_components/require-jsx/jsx",
        JSXTransformer: "../bower_components/react/JSXTransformer"
    },
    shim: {
        JSXTransformer: {
            exports: "JSXTransformer"
        }
    }
});

require(["react", "jsx!../jsx/application", "properties", "themes", "defaults"], function (React, Application, properties, themes, defaults) {
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