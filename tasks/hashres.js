/* global module */
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
                src: globs.static_assets,
                dest: globs.static_asset_references
            }
        }
    };
})();