var express = require('express'),
	router 	= express.Router();

var blogCtrl = require('../controllers');

router
	.route("/")
	.get(blogCtrl.getAllBlogs)
	.post(blogCtrl.postBlog);

router
	.route("/:id")
	.get(blogCtrl.getOneBlog);

module.exports = router;