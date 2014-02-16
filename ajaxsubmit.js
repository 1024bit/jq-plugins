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
		$ 		= require('jquery');
		
		$.fn.ajaxSubmit = function (ajaxOpts) {
			var $form = this, self = this;
			if (!$.nodeName(this.get(0), 'form')) $form = this.closest('form');
			var deferred = $.Deferred();
			$form.submit(function(e) {
				var params = {};
				if (!(e instanceof $.Event)) { 
					e = $.Event(e);
				}
				$.each(self.serializeArray(), function () {
					if (!(this.name in params)) { 
						params[this.name] = this.value;
					} else {
						params[this.name] = [].concat(params[this.name], this.value);
					}
				});	
				
				ajaxOpts.data = ajaxOpts.data || {};
				$.extend(ajaxOpts.data, params);	
		
				if (!e.isDefaultPrevented() && (!ajaxOpts.submit || (ajaxOpts.submit.apply(this, [e, ajaxOpts.data]) !== false)) && ajaxOpts.url) {
					$.ajax(ajaxOpts).done(function(data, textStatus, jqXHR) {
						deferred.resolve(data, textStatus, jqXHR);
					});
				}
				return false;
			});
			return deferred.promise();	
		};
	}
}));