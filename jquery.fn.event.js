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
        return define("jquery.fn.event", factory);
    }
    // Common
    return factory(require);	

    function factory(require, exports) {
        var
        $ = require('jquery');

        $.extend($.fn, {
            // Off event by event prefix
            offByEventPrefix : function (prefix) {
                var events = $.isWindow(this[0]) ? this[0][$.expando]['events'] : $.cache[this[0][$.expando]]['events'],
                self = this;
                $.each(events, function (evttype) {
                    if (!evttype.indexOf(prefix))
                        self.off(evttype);
                });
            },
            // Whether event is listened or not
            isListened : function (evttype, namespace) {
                var id = this[0][$.expando];
                if (!id)
                    return false;
                var events = $.isWindow(this[0]) ? id['events'] : $.cache[id]['events'],
                b = false;
                if (!events[evttype] || !namespace)
                    return !!events[evttype];
                $.each(events[evttype], function () {
                    if (this.namespace == namespace) {
                        b = true;
                        return false;
                    }
                });
                return b;
            },
            // Override event listener
            overrideListener : function (evttype, data, context, one) {
                one = one || true;
                var events = $.isWindow(this[0]) ? this[0][$.expando]['events'] : $.cache[this[0][$.expando]]['events'];
                if (events[evttype]) {
                    $.each(events[evttype], function () {
                        var self = this;
                        var _handler = this.handler;
                        this.handler = function () {
                            var args = [].slice.call(arguments, 0);
                            _handler.apply(context || this, (data !== undefined) ? args.concat([data]) : args);
                            // Only one time, then restore to original
                            if (one)
                                self.handler = _handler;
                        };
                        // Keep the guid
                        this.handler.guid = _handler.guid;
                    });
                }
            }
        });
    }
});
