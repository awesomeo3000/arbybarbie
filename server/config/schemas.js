'use strict';

var fs = require('fs');

module.exports = function (app) {
	var modelsPath = __dirname + '/../schemas';

	var walk = function (path) {
		fs.readdirSync(path).forEach(function (file) {
			var newPath = path + '/' + file;
			var stat = fs.statSync(newPath);
			if (stat.isFile()) {
				if (/(.*)\.(js$|coffee$)/.test(file)) {
					require(newPath);
				}
			} else if (stat.isDirectory()) {
				// walk(newPath);
			}
		});
	};
	walk(modelsPath);
};