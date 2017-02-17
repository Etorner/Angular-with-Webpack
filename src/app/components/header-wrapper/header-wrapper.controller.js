(function() {
    angular.module('components')
        .controller('headerWrapper', headerWrapper);

    function headerWrapper() {
        var vm = this;
        vm.currentUser = window.CurrentUser;
        vm.showingPreview = window.showingPreview;
        vm.closeDropdown = closeDropdown;
        vm.showMenuUser = false;

        function closeDropdown() {
			if(vm.showMenuUser){
				vm.showMenuUser = false;
			}
		}
    }
})();