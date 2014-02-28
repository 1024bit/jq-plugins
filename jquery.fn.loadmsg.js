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
        return define("jquery.fn.loadmsg", [], factory);
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
        $ = require('jquery'),
        $loading,
        $mask;

        $.extend($.fn, {
            // Show loading msg
            showLoadMsg : function (opts) {
                if ($loading && $loading.is(':visible'))
                    return;
                opts = opts || {};
                var
                $ctnr,
                iterator = [],
                $ldg = $loading,
                $msk = $mask,
                msg = opts.message,
                mask = opts.mask,
                $wpr = $('<div/>').css({
                        'position' : 'absolute'
                    }),
                isStr = msg && ($.type(msg) === 'string');
                if (this instanceof $) {
                    this.css('position', 'relative');
                    $ctnr = this;
                }
                if (opts.center) {
                    $ctnr = $('body');
                }

                isStr && (msg = '<div class="widget-msg widget-msg-' + opts.type + '">' + msg + '</div>');
                $ldg && $ldg.remove();
                $ldg = (!msg)
                 ? $wpr.append(opts.defaultMsg ? ('<div class="widget-msg widget-msg-' + opts.type + '">' + opts.defaultMsg + '</div>') : '<i class="widget-loading"/>')
                 : $wpr.append(msg);
                $loading = $ldg;

                iterator.push($ldg);
                if (mask) {
                    if (!$msk) {
                        $msk = $('<div class="widget-mask" />').css({
                                left : 0,
                                top : 0,
                                bottom : 0,
                                right : 0
                            });
                        $mask = $msk;
                    }

                    iterator.push($mask);
                }

                $.each(iterator, function () {
                    this.appendTo($ctnr);
                    this.show();
                });

                // Avoid the '"createDocumentFragment" of undefined' error
                opts.changeModule && ($ctnr = $win);
                $ldg.css({
                    top : $ctnr.scrollTop() + ($ctnr.outerHeight(true) - $ldg.outerHeight(true)) / 2,
                    left : $ctnr.scrollLeft() + ($ctnr.outerWidth(true) - $ldg.outerWidth(true)) / 2
                });

            },
            // Hide load msg
            hideLoadMsg : function () {
                var $ldg = $loading,
                $msk = $mask;
                $ldg && $ldg.hide();
                $msk && $msk.hide();
            }
        });
    }
});
