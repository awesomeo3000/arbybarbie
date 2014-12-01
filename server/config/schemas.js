'use strict';

var fs = require('fs');
var logger = require('log4js').getLogger();

module.exports = function (app) {
	var modelsPath = __dirname + '/../schemas';

	var walk = function (path) {
		fs.readdirSync(path).forEach(function (file) {
			var newPath = path + '/' + file;
			var stat = fs.statSync(newPath);
			if (stat.isFile()) {
				if (/(.*)\.(js$|coffee$)/.test(file)) {
					require(newPath);
					logger.debug('Registering schema', file.substring(0, file.length - 3));
				}
			} else if (stat.isDirectory()) {
				// walk(newPath);
			}
		});
	};
	walk(modelsPath);
};