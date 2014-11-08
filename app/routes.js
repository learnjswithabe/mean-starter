// app/routes.js

// grab the nerd model that we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {

	// server routes =======================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/nerds', function(req, res) {
		console.log('GET /api/nerds');
		// use mongoose to get all the nerds from the db
		Nerd.find(function(err, nerds) {
			console.log('find');
			// if there is an error retreiving, send the error - nothing fter res.send(err) will execute
			if (err) {
				console.log('error');
				res.send(err);
			}
			console.log('no error');
			res.send(nerds);	// return all the nerds in JSON format
		});
	});

	// route to handle createing goes here (app.post)
	app.post('/api/nerds', function(req, res) {
		console.log('POST /api/nerds');
		var nerd = new Nerd();	// use mongoose to add a new nerd to the db
		nerd.name = req.body.name
		// save the nerd
		nerd.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Nerd (' + nerd.name + ') created!' });
		});
	});

	// route to handle delete goes here (app.delete)


	// front-end routes ======================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');	// load our public index.html file
	});

};

