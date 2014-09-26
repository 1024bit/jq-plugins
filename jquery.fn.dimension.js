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
				- parseFloat(this.css('borderLeftWidth')) - parseFloat(this.css('borderRightWidth')) 
				- parseFloat(this.css('paddingLeft')) - parseFloat(this.css('paddingRight'))
			);
		},
		dimHeight : function (val) {
			return this.height(
				val 
				- parseFloat(this.css('borderTopWidth')) - parseFloat(this.css('borderBottomWidth')) 
				- parseFloat(this.css('paddingTop')) - parseFloat(this.css('paddingBottom'))
			);
		}
	});
});
