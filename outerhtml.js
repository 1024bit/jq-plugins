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
		
		$.fn.outerHtml = function () {
			var outerHtml = '', $div;
			if (this[0].outerHTML || false) {
				return this[0].outerHTML;
			}
			$div = $('<div/>');
			$div[0].appendChild(this.clone(true)[0]);
			outerHtml = $div[0].innerHTML;
			$div[0] = null;
			return outerHtml;
		};	
	}
}));	