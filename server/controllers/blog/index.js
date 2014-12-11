var mongoose = require('mongoose');

var Blog = mongoose.model('Blog');

exports.saveBlog = function (req, res) {
	var blog = new Blog(req.body);

	blog.save(function (err) {
		if (err) {
			return res.status(400).send('Error while saving');
		}

		res.sendStatus(200);
	});
};

exports.getBlogs = function (req, res) {
	Blog.find(function (err, result) {
		if (err) {
			return res.status(400).send('Error while retrieving');
		}

		res.json(result);
	});
};