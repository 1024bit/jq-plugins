(function (global, factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(global);
	} else {
		factory(global);
	}
}(window || this, function (global) {
	// Support cmd && amd
	if (define) {
		define(factory);
	}
	if (typeof require === 'function') {
		return factory(require);
	}
	function factory (require, exports) {
		var 
		$ = require('jquery');
		
		$.fn.scrollTo = function (selector) {
			// An element is said to be positioned if it has a CSS position attribute of relative, absolute, or fixed.
			if (!~('relative, absolute, fixed'.indexOf(this.css('position')))) {
				this.css({'position': 'relative'});
			}
			var $target = this.find(selector), 
				offset = $target.position(), 
				dist, scrolltop = this.scrollTop();
			dist = scrolltop - offset.top - parseFloat(this.css('borderTop'));
			this.scrollTop(scrolltop - dist);
		};	
	}
}));	