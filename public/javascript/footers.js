/* global define */
define([], function () {
    "use strict";
    return function () {
        return {
            "noFooter": {
                "firstLine": null,
                "secondLine": null
            },
            "germanLegalFooter": {
                // Do not translate these two strings - they are required by German law to be in German
                "firstLine": "ThoughtWorks Deutschland GmbH - Großer Burstah 46-48 - D-20457 Hamburg",
                "secondLine": "Sitz der Gesellschaft: Hamburg - Geschäftsführer: Dr. Peter Buhrmann - AG Hamburg - HRB 115336"
            }
        };
    };
});