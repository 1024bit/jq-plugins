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
        return define("jquery.fn.scrollto", [], factory);
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

        $.fn.scrollTo = function (selector) {
            // An element is said to be positioned if it has a CSS position attribute of relative, absolute, or fixed.
            if (!~('relative, absolute, fixed'.indexOf(this.css('position')))) {
                this.css({
                    'position' : 'relative'
                });
            }
            var $target = this.find(selector),
            offset = $target.position(),
            dist,
            scrolltop = this.scrollTop();
            dist = scrolltop - offset.top - parseFloat(this.css('borderTop'));
            this.scrollTop(scrolltop - dist);
        };
    }
});
