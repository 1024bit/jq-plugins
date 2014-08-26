define(function(require, exports) {
	var
	$ = require('jquery');

	$.fn.outerHtml = function () {
		var outerHtml = '',
		$div;
		if (this[0].outerHTML || false) {
			return this[0].outerHTML;
		}
		$div = $('<div/>');
		$div[0].appendChild(this.clone(true)[0]);
		outerHtml = $div[0].innerHTML;
		$div[0] = null;
		return outerHtml;
	};
});

