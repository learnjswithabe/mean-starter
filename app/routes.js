// app/routes.js

var Player = require('./models/player');
var Stats = require('./models/stats');
var Roster = require('./models/roster');

module.exports = function(app) {

	// server routes =======================================================
	// handle things like api calls
	// authentication routes

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
		player.pyds = req.body.pyds;
		player.ptds = req.body.ptds;
		player.ruyds = req.body.ruyds;
		player.rutds = req.body.rutds;
		player.reyds = req.body.reyds;
		player.retds = req.body.retds;
		// save the player
		player.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Player (' + player.first + " " + player.last + ') created!' });
		});
	});

	// route to get all game stats
	app.get('/api/game_stats', function(req, res) {
		console.log('GET /api/game_stats');
		Stats.find(function(err, game_stats) {
			if (err) {
				res.send(err);
			}
			res.send(game_stats);
		});
	});

	// route to get all game rosters
	app.get('/api/game_rosters', function(req, res) {
		console.log('GET /api/game_rosters');
		Roster.find(function(err, game_rosters) {
			if (err) {
				res.send(err);
			}
			res.send(game_rosters);
		});
	});
	// front-end routes ======================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');	// load our public index.html file
	});

};

