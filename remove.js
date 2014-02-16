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
		$ 		= require('jquery'), 
		_remove = $.fn.remove;
		
		$.fn.remove = function (selector, keepData) {
			if ($.nodeName(this.get(0), 'iframe') && ($.browser.msie && parseFloat($.browser.version, 10) < 9)) {
				purge(this);
				function purge ($frame) {
					var len = $frame.length;

					$frame.load(function () {
						var frame = this;
						frame.contentWindow.document.innerHTML = '';

						if (--len === 0) {
							$frame.remove();
						}
					});
					$frame.attr('src', 'about:blank');
				};
			} else {
				_remove.call(this, selector, keepData);
				var div = $('<div/>')[0];
				this.each(function () {
					div.appendChild(this);
					div.innerHTML = '';
				});
				div = null;
			}
			return this;
		};	
	}
}));	