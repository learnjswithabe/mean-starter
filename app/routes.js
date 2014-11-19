// app/routes.js

// grab the nerd model that we just created
var Nerd = require('./models/nerd');
var Player = require('./models/player');

module.exports = function(app) {

	// server routes =======================================================
	// handle things like api calls
	// authentication routes

	// route to get all nerds
	app.get('/api/nerds', function(req, res) {
		console.log('GET /api/nerds');
		// use mongoose to get all the nerds from the db
		Nerd.find(function(err, nerds) {
			// if there is an error retreiving, send the error - nothing fter res.send(err) will execute
			if (err) {
				res.send(err);
			}
			res.send(nerds);	// return all the nerds in JSON format
		});
	});

	// route to get nerd by id
	app.get('/api/nerds/:nerdId', function(req, res) {
		console.log('GET /api/nerds/' + req.params.nerdId);
		Nerd.findById(req.params.nerdId, function(err, nerd) {
			if (err) {
				res.send(err);
			}
			res.send(nerd);		// return the nerd with id = nerdId
		});
	});

	// route to handle createing goes here (app.post)
	app.post('/api/nerds', function(req, res) {
		console.log('POST /api/nerds');
		var nerd = new Nerd();	// use mongoose to add a new nerd to the db
		nerd.name = req.body.name;
		nerd.language = req.body.language;
		// save the nerd
		nerd.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Nerd (' + nerd.name + ') created!' });
		});
	});

	// route to get all players
	app.get('/api/players', function(req, res) {
		console.log('GET /api/players');
		// use mongoose to get all the players from the db
		Player.find(function(err, players) {
			// if there is an error retreiving, send the error - nothing fter res.send(err) will execute
			if (err) {
				res.send(err);
			}
			res.send(players);	// return all the players in JSON format
		});
	});

	// route to get player by id
	app.get('/api/players/:playerId', function(req, res) {
		console.log('GET /api/players/' + req.params.playerId);
		Player.findById(req.params.playerId, function(err, player) {
			if (err) {
				res.send(err);
			}
			res.send(player);		// return the player with id = playerId
		});
	});

	// route to handle createing goes here (app.post)
	app.post('/api/players', function(req, res) {
		console.log('POST /api/players');
		var player = new Player();	// use mongoose to add a new player to the db
		player.first = req.body.first;
		player.last = req.body.last;
		// save the player
		player.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Player (' + player.first + " " + player.last + ') created!' });
		});
	});


	// front-end routes ======================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');	// load our public index.html file
	});

};

