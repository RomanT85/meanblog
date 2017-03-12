var mongoose = require('mongoose'),
	Schema 	= mongoose.Schema;

var blogSchema = new Schema({
	title: String,
	subheading: {type:String},
	bodytext: {type: String},
	footer: {type: String},
	created: {type: Date, default: Date.now},
	author: {
		name: {type: String, default: "Satu Myllymäki"}
	}
});

module.exports = mongoose.model("blog", blogSchema);