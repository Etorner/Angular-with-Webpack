(function() {
	angular.module('components')
		.component('headerWrapper', headerWrapper());

	function headerWrapper() {
		return {
			controller: 'headerWrapper as headerWrapper',
			template: require('./header-wrapper.tpl.html')
		};
	}
})();
