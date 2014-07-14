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
        return define("jquery.fn.serializearray", factory);
    }
    // Common
    return factory(require);

    function factory(require, exports) {
        var
        $ = require('jquery'),
        _serializeArray = $.fn.serializeArray;

        // Support all elements
        $.fn.serializeArray = function () {
            return this.prop('elements') ?
            _serializeArray.call(this) :
            this.prop('elements', this.find('input, select, textarea')).serializeArray();
        };
    }
});
