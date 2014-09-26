define("jquery.fn.metadata", function(require, exports) {
	var
	$ = require('jquery');
	
	$.fn.metadata = function (name) {
		var data;
		if ($.metadata) {
			data = $.metadata.get(this[0], name ? {
					type : 'attr',
					name : 'data-' + name,
					single : name
				}
					 : {});
		} else {
			data = this.data(name) || '{}';
			if ($.type(data) === 'string') {
				data = data.length && eval('(' + data + ')');
				this.data(name, data);
			}
		}
		return data;
	};
});

