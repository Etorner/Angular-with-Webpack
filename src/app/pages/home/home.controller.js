(function() {
	angular.module('pages')
		.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['globalFunctions'];

	function homeCtrl(globalFunctions) { 
		var vm = this;
		
		vm.intro = "Hello world"
		vm.imageExample = require("../../../../src/assets/images/logo.png");
	}
})();
