/*globals require, exports */

'use strict';

var traits = require('escomplex-traits');

exports.get = get;

function get (settings) {
    return traits.actualise(
        1,
        function () {
            return settings.trycatch ? 1 : 0;
        },
        'catch', undefined, [ 'param', 'body' ]
    );
}

