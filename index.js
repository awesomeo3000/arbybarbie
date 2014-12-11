'use strict';

/*
	Module dependencies
*/
var express = require('express');
var mongoose = require('mongoose');

// Express app
var app = express();

// Express router
var router = express.Router();

// Add configuration to the app so it will be accessible with app.get('config') and require(/* Path to config */)
app.set('config', require('./server/config/config'));

mongoose.connect(app.get('config').db.local.URI);

var db = mongoose.connection;

db.on('connected', function () {
	console.log('connected to db');
});

db.on('disconnected', function () {
	console.log('disconnected from db, attempting reconnect');

	setTimeout(function () {
		mongoose.connect(app.get('config').db.local.URI);
	}, 1000);
});

// Bootstrap schemas
require('./server/config/schemas')(app);

// Bootstrap express
require('./server/config/express')(app);

// Bootstrap routes
require('./server/config/routes')(app, router);

app.listen(9000);
console.log('listening on port 9000');