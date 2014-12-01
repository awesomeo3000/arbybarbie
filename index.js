'use strict';

/*
	Module dependencies
*/
var express = require('express');



// Express app
var app = express();

// Express router
var router = express.Router();

// Bootstrap express
require('./config/express')(app);

// Bootstrap schemas
require('./config/schemas')(app);

// Bootstrap routes
require('./config/routes')(app, router);

module.exports = app;