(function() {
	angular.module('util')
		.factory('globalFunctions', globalFunctions);

    globalFunctions.$inject = ['appConstants'];

	function globalFunctions(constants) {
        var globalData = {};

        function getImage(imageName) {
            return constants.imageUrl + imageName;
        }

        return {
            globalData: globalData,
            getImage: getImage
        };

	}
})();
