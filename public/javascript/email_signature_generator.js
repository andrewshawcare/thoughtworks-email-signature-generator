/* global define */
// jshint -W072
define([
    "react",
    "jsx!../jsx/email_signature_generator",
    "properties",
    "themes",
    "footers",
    "defaults"
], function (React, EmailSignatureGenerator, properties, themes, footers, defaults) {
    "use strict";
    return function (rootElement, staticAssetsUrl) {
        React.renderComponent(new EmailSignatureGenerator({
            "languages": Object.keys(properties),
            "properties": properties,
            "themes": themes(staticAssetsUrl),
            "language": defaults.language,
            "theme": defaults.theme,
            "footers": footers(),
            "footer": defaults.footer,
            "name": defaults.name,
            "title": defaults.title,
            "email": defaults.email,
            "telephone": defaults.telephone
        }), rootElement);
    };
});