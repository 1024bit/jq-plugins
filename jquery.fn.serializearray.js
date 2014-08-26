define(function(require, exports) {
	var
	$ = require('jquery'),
	_serializeArray = $.fn.serializeArray;

	// Support all elements
	$.fn.serializeArray = function () {
		return this.prop('elements') ?
		_serializeArray.call(this) :
		this.prop('elements', this.find('input, select, textarea')).serializeArray();
	};
});
