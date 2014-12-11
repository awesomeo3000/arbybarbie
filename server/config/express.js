'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var config = require('./config');

module.exports = function (app) {

	// Parse body
	app.use(bodyParser.json());

	// Parse query strings
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(express.static(app.get('config').root + '/public_build'));
	app.use(express.static(app.get('config').root + '/bower_components'));

	app.engine('jade', require('jade').__express);

	app.set('views', config.root + '/public/views');

	app.set('view engine', 'jade');



};