define(function(require, exports) {
	var
	$ = require('jquery');

	$.fn.scrollTo = function (selector) {
		// An element is said to be positioned if it has a CSS position attribute of relative, absolute, or fixed.
		if (!~('relative, absolute, fixed'.indexOf(this.css('position')))) {
			this.css({
				'position' : 'relative'
			});
		}
		var $target = this.find(selector),
		offset = $target.position(),
		dist,
		scrolltop = this.scrollTop();
		dist = scrolltop - offset.top - parseFloat(this.css('borderTop'));
		this.scrollTop(scrolltop - dist);
	};
});
