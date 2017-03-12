var MongoClient = require('mongodb').MongoClient;
var dburl = 'your own mongoDB url';

var _connection = null;

var open = function() {
	MongoClient.connect(dburl, function(err, db) {
		if(err) {
		 	console.log(err);
			return;
		}
		_connection = db;
		console.log("DB connection Open!", db);
	});
};

var get = function() {
	return _connection;
}

module.exports = {
	open: open,
	get: get
};
