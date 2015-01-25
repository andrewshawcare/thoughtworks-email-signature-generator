/* global module */
module.exports = (function () {
    "use strict";

    var globs = require("./data/globs");
    
    return {
        id: "aws_s3",
        name: "grunt-aws-s3",
        configuration: {
            options: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                bucket: process.env.AWS_S3_BUCKET
            },
            build: {
                files: [
                    {
                        dest: "/",
                        src: globs.cdn
                    }
                ]
            }
        }
    };
})();