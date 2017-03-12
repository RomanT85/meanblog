var Blog = require('../../models/blog');

module.exports.paginateBlogs = function(req, res, next) {
	var perPage = req.query.perPage || 3;
	var page = req.query.page || 1;
	var sortName = req.query.sortName || "title";
  var value = req.query.value || -1;
	var output = {
		data: null,
		pages: {
			current: page,
			prev: 0,
			hasPrev: false,
			next: 0,
			hasNext: false,
			total: 0
		},
		items: {
        	begin: ((page * perPage) - perPage) + 1,
        	end: page * perPage,
        	total: 0
      	}
	};
   if (req.query && req.query.perPage) {
    perPage = parseInt(req.query.perPage, 10);
  }
   if (req.query && req.query.page) {
    page = parseInt(req.query.page, 10);
  }
	Blog
	.find()
	.sort({'title': -1})
	.skip((page - 1) * perPage)
    .limit(perPage)	
    .exec(function(err, blogs) {
      	if(err) return next(err);
      	Blog.count().exec(function(err, count) {
      		if(err) return next(err);
      		output.items.total = count;
      		output.data = blogs;
        	output.pages.total = Math.ceil(output.items.total / perPage);
      		if(output.pages.current < output.pages.total) {
      			output.pages.next = Number(output.pages.current) + 1;
      		} else {
      			output.pages.next = 0;
      		}      
      		output.pages.hasNext = (output.pages.next !== 0);
      		output.pages.prev = output.pages.current - 1;
     	 	output.pages.hasPrev = (output.pages.prev !== 0);
      		if (output.items.end > output.items.total) {
        		output.items.end = output.items.total;
      		}
      		console.log(output);
      		res.json({
    			   output: output
    		  });
      	});
	});
}