require("./api/data/db");
var express 	= require('express'),
	path 		= require('path'),
	bodyParser 	= require('body-parser'),
	moment 		= require('moment'),
	app 		= express();

var mainRoutes = require('./api/routes');

app.set('port', 6300);

app.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

app.locals.moment = moment;
moment.locale = ("fi");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/blogs", mainRoutes);

var server 	= app.listen(process.env.PORT || app.get('port'), function(err) {
	if(err) return res.status(500, err);
	var port = server.address().port;
	console.log("Blog app has started on port "+port+".");
});