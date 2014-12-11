'use strict';

module.exports = function (app, router) {

	var index = require('../controllers/index');
	var blog = require('../controllers/blog/index');

	router.get('/partials/:partial', index.partials);

	router.post('/saveblog', blog.saveBlog);
	router.get('/getblogs', blog.getBlogs);

	router.get('*', index.index);

	// Add the router to the app with the version
	app.use('/', router);

};