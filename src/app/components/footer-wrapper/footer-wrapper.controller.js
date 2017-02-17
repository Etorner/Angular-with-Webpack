(function() {
	angular.module('components')
		.controller('footerWrapper', footerWrapper);

	function footerWrapper() {
		var vm = this;
		vm.currentYear = new Date();
		vm.currentYear = vm.currentYear.toDateString();
	}
})();
