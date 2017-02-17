(function() {
	angular.module('components')
		.component('footerWrapper', footerWrapper());

	function footerWrapper() {
		return {
			controller: 'footerWrapper as footerWrapper',
			template: require('./footer-wrapper.tpl.html')
		};
	}
})();
