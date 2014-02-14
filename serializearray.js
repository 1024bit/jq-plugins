(function (global, factory) {
	factory(global);
}(window || this), function (global) {
	if (require) {
		factory(require);
	}
	// Support cmd && amd
	if (define) {
		define(factory);
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
});	