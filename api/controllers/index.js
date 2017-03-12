var dbconn = require('../data/dbconnection');
var mongoose = require('mongoose');
var Blog = require("../../models/blog");
var paginate = require('./paginate');

module.exports.getAllBlogs = function(req, res, next) {
	paginate.paginateBlogs(req, res, next);
};

module.exports.getOneBlog = function(req, res) {
	var blogId = req.params.id;
	Blog
		.findById(blogId)
		.exec(function(err, blog) {
			if(err) return res.status(500).send(err);
			res
				.status(200)
				.json(blog)
		});
}

module.exports.postBlog = function(req, res) {
	Blog
	.create({
		title: req.body.title,
		subheading: req.body.subheading,
		bodytext: req.body.bodytext,
		footer: req.body.footer,
		created: Date.now()
	},
	function(err, newBlog) {
		if(err) res.status(400, err);
		res
		.status(200)
		.json(newBlog)
	});
};