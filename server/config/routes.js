'use strict';

module.exports = function (app, router) {

	var bets = require('../controllers/bets/index');
	var index = require('../controllers/index');

	router.get('/', index.index);
	//router.get('/partials/:partial', index.partials);

	router.get('/2types', bets.findbets2types);

	router.get('/3types', bets.findbets3types);

	router.get('*', index.index);

	// Add the router to the app with the version
	app.use('/', router);

};