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
		$ = require('jquery');
		
		$.fn.metadata = function (name) {
			var data;
			if ($.metadata) {
				data = $.metadata.get(this[0], name ? { type: 'attr', name: 'data-' + name, single: name } : {});
			} else {
				// data = this.data('data-' + name) || '{}';
				data = this.data(name) || '{}';
				if ($.type(data) === 'string') {
					data = data.length && eval('(' + data + ')');
					this.data(name, data);
				}
			}
			return data;
		};	
	}
});