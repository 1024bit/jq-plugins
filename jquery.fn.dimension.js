/**
 *  A element occupied dimension, for different `border-sizing`, get the same result
 */
define("jquery.fn.dimension", function(require, exports) {
	var
	$ = require('jquery');

	$.extend($.fn, {
		dimWidth : function (val) {
			return this.width(
				val 
				- parseInt(this.css('borderLeftWidth')) - parseInt(this.css('borderRightWidth')) 
				- parseInt(this.css('paddingLeft')) - parseInt(this.css('paddingRight'))
			);
		},
		dimHeight : function (val) {
			return this.height(
				val 
				- parseInt(this.css('borderTopWidth')) - parseInt(this.css('borderBottomWidth')) 
				- parseInt(this.css('paddingTop')) - parseInt(this.css('paddingBottom'))
			);
		}
	});
});
