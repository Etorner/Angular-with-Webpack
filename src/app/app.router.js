/*
*	App routes configuration
*/

(function() {
	// Routing configuration (UI-router)
	var firstLoadRoute = true;
	angular.module('app').config(router);

	// Dependencies injection
	router.$inject = [
		'$stateProvider',
		'$locationProvider',
		'$urlRouterProvider'
	];

	function router($stateProvider, $locationProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/page-not-found');
		$stateProvider

		.state('404', {
			url: '/page-not-found',
			template: require('./pages/page-not-found/page-not-found.tpl.html'),
			controller: 'pageNotFoundCtrl',
			controllerAs: 'pageNotFoundCtrl',
		})

		.state('home', {
			url: '/',
			template: require('./pages/home/home.tpl.html'),
			controller: 'homeCtrl',
			controllerAs: 'homeCtrl',
		})

		$locationProvider.html5Mode(true);
	}
})();
