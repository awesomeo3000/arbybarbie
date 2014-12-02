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
require('./server/config/express')(app);

// Bootstrap schemas
require('./server/config/schemas')(app);

// Bootstrap routes
require('./server/config/routes')(app, router);

app.listen(8000);
console.log('listening on port 8000');