/**
 *  Calc the size of childs from 1th to nth
 */
define("jquery.fn.nthsize", function(require, exports) {
	var
	$ = require('jquery');

	$.extend($.fn, {
		nthWidth : function (nth) {
			var $btmchild = this.find(':nth-child(' + nth + ')');
			return this.css('width', ($btmchild.length ? ($btmchild.position().left + $btmchild.offsetParent().scrollLeft() + $btmchild.outerWidth(true)) : 0) + 'px');
		},
		nthHeight : function (nth) {
			var $btmchild = this.find(':nth-child(' + nth + ')');
			return this.css('height', ($btmchild.length ? ($btmchild.position().top + $btmchild.offsetParent().scrollTop() + $btmchild.outerHeight(true)) : 0) + 'px');		
		}
	});
});