var mongoose = require('mongoose'),
	Schema 	= mongoose.Schema;

var blogSchema = new Schema({
	title: String,
	image: String,
	subheading: {type:String},
	bodytext: {type: String},
	footer: {type: String},
	created: {type: Date, default: Date.now},
	author: {
		name: {type: String, default: "Roman Tuomisto"}
	}
});

module.exports = mongoose.model("blog", blogSchema);