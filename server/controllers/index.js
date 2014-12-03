exports.index = function (req, res) {
	console.log('rendering index');
	res.render('index');
};

exports.partials = function (req, res) {
	console.log('rendering partial', req.params.partial);
	res.render('partials/' + req.params.partial);
};