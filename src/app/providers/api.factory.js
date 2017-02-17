/*
*	HTTP Calls
*/

(function() {
	angular.module('providers')
		.factory('api', api);

	api.$inject = [
		'$http',
		'appConstants'
	];

	function api($http, appConstants) {
		return {
			call: call,
			get: get,
			post: post
		};

		function get(_url, _params) {
			
			var config = {
				params: _params
			};
			return $http.get(appConstants.apiUrl + formatUrl(_url), config);
		}

		function post(_url, _data) {
			return $http({
				method: 'POST',
				url: appConstants.apiUrl + formatUrl(_url),
				headers: {
					'Content-Type': undefined
				},
				data: _data,
				transformRequest: angular.identity
			});
		}

		function call(_method, _url, _data) {
			return $http({
				method: _method.toUpperCase(),
				url: appConstants.apiUrl + formatUrl(_url),
				data: _data
			});
		}
	}

	function formatUrl(_url) {
		if (_url.charAt(0) !== '/' && _url.length > 0) {
			_url = '/' + _url;
		}

		return _url;
	}
})();
