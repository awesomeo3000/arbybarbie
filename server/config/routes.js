'use strict';

module.exports = function (app, router) {

	var auth = require('./auth');
	var bets = require('../endpoints/bets/index');

	router.get('/2types', bets.findbets2types);

	router.get('/3types', bets.findbets3types);

	// Add the router to the app with the version
	app.use('/', router);

};