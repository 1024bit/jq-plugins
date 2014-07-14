(function (global, factory) {
    // Node.js, CommonJS, CommonJS Like
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(global, true);
    } else {
        factory(global);
    }
})(this, function(global, noGlobal) {
    // Support cmd && amd
    if (define && (define.cmd || define.amd)) {
        return define("jquery.fn.attr", factory);
    }
    // Common
    return factory(require);

    function factory(require, exports) {
        var
        $ = require('jquery'),
        _removeAttr = $.fn.removeAttr;

        $.extend($.fn, {
            addAttr : function (attrName, val) {
                var
                re = new RegExp('\\b' + val + '\\b'),
                attrVal = this.attr(attrName);

                this.attr(attrName, (attrVal && !re.test(attrVal)) ? attrVal + ' ' + val : val);
                return this;
            },
            removeAttr : function (attrName, val) {
                var
                re = new RegExp('\\b' + val + '\\b'),
                attrVal = this.attr(attrName);

                if (attrVal === undefined)
                    return this;
                return val ? this.attr(attrName, attrVal.replace(re, '')) : _removeAttr.call(this, attrName);
            }
        });
    }
});
