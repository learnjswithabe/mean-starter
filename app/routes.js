// app/routes.js

// grab the nerd model that we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {

	// server routes =======================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/nerds', function(req, res) {
		// use mongoose to get all the nerds from the db
		Nerd.find(function(err, nerds) {
			// if there is an error retreiving, send the error - nothing fter res.send(err) will execute
			if (err) {
				res.send(err);
			}
			res.send(nerds);	// return all the nerds in JSON format
		});
	});

	// route to handle createing goes here (app.post)
	// route to handle delete goes here (app.delete)


	// front-end routes ======================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');	// load our public index.html file
	});

};

