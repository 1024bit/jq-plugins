/**
 * Scroll to
 */
define(function(require, exports) {
	var
	$ = require('jquery');

	$.fn.scrollTo = function (selector) {
		var $target = (selector instanceof $) ? selector : this.find(selector);
		// An element is said to be positioned if it has a CSS position attribute of relative, absolute, or fixed.
		if (!~('relative, absolute, fixed'.indexOf(this.css('position')))) {
			this.css({"position": "relative"});
		}
		
		return this.scrollTop(this.scrollTop() + $target.position().top + parseFloat(this.css('borderTop')));
	};
});
