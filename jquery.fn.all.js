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
        return define("jquery.fn.all", [], factory);
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
        require('jquery.fn.ajaxsubmit');
        require('jquery.fn.attr');
        require('jquery.fn.event');
        require('jquery.fn.loadmsg');
        require('jquery.fn.metadata');
        require('jquery.fn.outerhtml');
        require('jquery.fn.remove');
        require('jquery.fn.scrollto')
        require('jquery.fn.serializearray');
    }
});
