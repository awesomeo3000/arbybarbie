'use strict';

var bodyParser = require('body-parser');

module.exports = function (app) {

	// Add configuration to the app so it will be accessible with app.get('config') and require(/* Path to config */)
	app.set('config', require('./config'));

	// Parse body
	app.use(bodyParser.json());

	// Parse query strings
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	// // Only use logger for development environment
	// if (process.env.NODE_ENV === 'development') {
	// 	app.use(require('morgan')('dev'));
	// }



};