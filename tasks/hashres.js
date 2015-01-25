/* global module, require */
module.exports = (function () {
    "use strict";

    var globs = require("./data/globs");
    
    return {
        id: "hashres",
        name: "grunt-hashres",
        configuration: {
            options: {
                fileNameFormat: "${name}.${hash}.${ext}"
            },
            build: {
                src: globs.staticAssets,
                dest: globs.staticAssetReferences
            }
        }
    };
})();