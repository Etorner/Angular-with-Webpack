(function() {
	angular.module('providers')
		.factory('page', page);

    page.$inject = ['$rootScope'];
        
    function page($rootScope) {
        var setTitle =  function(title){
            $rootScope.title = title;
        }
        var setDescription =  function(description){
            $rootScope.description = description;
        }

        return {
            setTitle: setTitle,
            setDescription: setDescription
        }
    }
    
})();