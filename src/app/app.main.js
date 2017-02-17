/*
*	Modules definition
*/

import 'angular';
import 'angular-ui-router'

require('../scss/style.scss');

(function() {
	// Pages module defition and injection
	angular.module('pages', []);
	
	// Providers module defition and injection
	angular.module('providers', [
		'providers'
	]);
	// Components module defition and injection
	angular.module('components', ['providers']);
	// Utils module defition and injection
	angular.module('util', []);
	// Vendors module definition and injection
	angular.module('vendor', [
		'ui.router'
	]);
	
	// App main Module definition and injection
	angular.module('app', [
		'vendor',
		'util',
		'components',
		'pages'
	]);
})();


