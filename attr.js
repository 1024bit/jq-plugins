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
		$ 			= require('jquery'), 
		_removeAttr	= $.fn.removeAttr;
		
		$.extend($.fn, {
			addAttr: function(attrName, val) {
				var 
				re = new RegExp('\\b' + val + '\\b'), 
				attrVal = this.attr(attrName);
				
				this.attr(attrName, (attrVal && !re.test(attrVal)) ? attrVal + ' ' + val : val);
				return this;
			}, 	
			removeAttr: function(attrName, val) {
				var 
				re = new RegExp('\\b' + val + '\\b'), 
				attrVal = this.attr(attrName);
					
				if (attrVal === undefined) return this;
				return val ? this.attr(attrName, attrVal.replace(re, '')) : _removeAttr.call(this, attrName);
			}, 		
		});	
	}
});