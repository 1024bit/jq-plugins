/**
 *  A element occupied dimension
 */
define("jquery.fn.dimension", function(require, exports) {
	var
	$ = require('jquery');

	$.extend($.fn, {
		dimWidth : function (val) {
			return this.css('width', (val - parseInt(this.css('borderLeftWidth')) - parseInt(this.css('borderRightWidth'))) + 'px');
		},
		dimHeight : function (val) {
			return this.css('height', (val - parseInt(this.css('borderTopWidth')) - parseInt(this.css('borderBottomWidth'))) + 'px');
		}
	});
});
