(function() {
	angular.module('app')
		.factory('searchApi', searchApi);

    searchApi.$inject = ['api', '$q'];

	function searchApi(api, $q) {
        
        var deferred = $q.defer();

        function getSearch() {
            return api.get('search');
        }

        return {
            getSearch: getSearch
        }
	}
})();
