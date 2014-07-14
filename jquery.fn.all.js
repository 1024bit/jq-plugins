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
        return define("jquery.fn.all", factory);
    }
    // Common
    return factory(require);

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
