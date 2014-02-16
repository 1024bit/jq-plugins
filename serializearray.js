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
		$				= require('jquery'), 
		_serializeArray = $.fn.serializeArray;
		
		// Support all elements
		$.fn.serializeArray = function () {
			return this.prop('elements') ? 
					_serializeArray.call(this) : 
					this.prop('elements', this.find('input, select, textarea')).serializeArray();
		};	
	}
}));	