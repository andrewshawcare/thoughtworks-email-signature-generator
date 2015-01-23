/*globals require, exports */

'use strict';

var traits = require('escomplex-traits'),
    safeName = require('../safeName');

exports.get = get;

function get () {
    return traits.actualise(
        0, 0,
        function (node) {
            return node.operator;
        },
        undefined, [ 'left', 'right' ],
        function (node) {
            if (node.left.type === 'MemberExpression') {
                return safeName(node.left.object) + '.' + node.left.property.name;
            }

            return safeName(node.left.id);
        }
    );
}

