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
        return define("jquery.fn.metadata", factory);
    }
    // Common
    return factory(require);	
    
    function factory(require, exports) {
        var
        $ = require('jquery');
        
        $.fn.metadata = function (name) {
            var data;
            if ($.metadata) {
                data = $.metadata.get(this[0], name ? {
                        type : 'attr',
                        name : 'data-' + name,
                        single : name
                    }
                         : {});
            } else {
                // data = this.data('data-' + name) || '{}';
                data = this.data(name) || '{}';
                if ($.type(data) === 'string') {
                    data = data.length && eval('(' + data + ')');
                    this.data(name, data);
                }
            }
            return data;
        };
    }
});
