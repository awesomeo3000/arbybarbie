var app = require('./index');

var mongoose = require('mongoose'),
    logger = require('log4js').getLogger(),
    config = require('nconf')

/************ Databse connection ************/
var db = mongoose.connection;

var mongoURI = process.env.MONGOHQ_URI || config.get('db:local:URI');

db.on('connected', function () {
    logger.info('Connected to MongoDB');
});

// Probably unneccessary since we are using auto_reconnect:true
db.on('disconnected', function () {
    logger.info('MongoDB disconnected');
    mongoose.connect(mongoURI, {
        server: {
            auto_reconnect: true

        }
    });
});

// Connect to database
mongoose.connect(mongoURI, {
    server: {
        auto_reconnect: true,
        poolSize: 8, // Default 5
        socketOptions: {
            keepAlive: 1
        }
    }
});

/************ Start app ************/

var port = process.env.PORT || 3030;

// Start the app
app.listen(port);

logger.info('Server is listening on port ' + port);