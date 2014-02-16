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
		require('./ajaxsubmit');
		require('./attr');
		require('./event');
		require('./loadmsg');
		require('./metadata');
		require('./outerhtml');
		require('./remove');
		require('./scrollto')
		require('./serializearray');
	}
}));