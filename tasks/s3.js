/* global module */
module.exports = (function () {
    "use strict";

    var globs = require("./data/globs");
    
    return {
        id: "s3",
        name: "grunt-aws",
        configuration: {
            options: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                bucket: process.env.AWS_S3_BUCKET,
                headers: {
                    CacheControl: 1000*60*60*24*365
                }
            },
            build: {
                src: globs.hashed_static_assets
            }
        }
    };
})();