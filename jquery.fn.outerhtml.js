(function (global, factory) {
    'use strict';
    // Node.js, CommonJS, CommonJS Like
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(global, true);
    } else {
        factory(global);
    }
})(this, function (global, noGlobal) {
    // Support cmd && amd
    if (define && (define.cmd || define.amd)) {
        return define("jquery.fn.outerhtml", [], factory);
    }
    // Global require
    if (typeof require === 'function') {
        return factory(require);
    }
    // Common
    return factory(function (id) {
        var key;
        for (key in global)
            if (key.toLowerCase() === id.toLowerCase())
                return global[key];
    });

    function factory(require, exports) {
        var
        $ = require('jquery');

        $.fn.outerHtml = function () {
            var outerHtml = '',
            $div;
            if (this[0].outerHTML || false) {
                return this[0].outerHTML;
            }
            $div = $('<div/>');
            $div[0].appendChild(this.clone(true)[0]);
            outerHtml = $div[0].innerHTML;
            $div[0] = null;
            return outerHtml;
        };
    }
});
