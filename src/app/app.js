/*
*	Modules definition
*/

import 'angular';
import 'angular-ui-router'

function requireAll(r) { r.keys().forEach(r); }

//Main Configuration file angular
require('./app.main.js');
require('./app.constant.js');
require('./app.config.js');
requireAll(require.context('./util/', true, /\.js$/));
requireAll(require.context('./providers/', true, /\.js$/));
requireAll(require.context('./components/', true, /\.js$/));
requireAll(require.context('./pages/', true, /\.js$/));

// Runtime aplicationn
require('./app.router.js');
require('./app.run.js');


