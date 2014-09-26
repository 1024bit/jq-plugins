/**
 *  Determine a element's orientation relative to container
 *  Reference from lazyloader.js, some improve
 */
define("jquery.fn.orientation", function(require, exports) {
    var $ = require('jquery');

    $.extend($.fn, {
        aboveTheTop: function (container) {
            var fold, i = container, $i = $(container);
            if (!i || i == document || i.tagName.toLowerCase() == 'html' || i.tagName.toLowerCase() == 'body') {
                fold = $i.scrollTop();
            } else {
                fold = $i.offset().top;
            }
            fold += parseFloat($i.css('border-top-width'));
            return fold >= this.offset().top + this.outerHeight();
        },
        leftOfBegin: function (container) {
            var fold, i = container, $i = $(container);
            if (!i || i == document || i.tagName.toLowerCase() == 'html' || i.tagName.toLowerCase() == 'body') {
                fold = $i.scrollLeft();
            } else {
                fold = $i.offset().left;
            }
            fold += parseFloat($i.css('border-left-width'));
            return fold >= this.offset().left + this.outerWidth();
        }
    });
});