// app/models/player.js
// grab the mongoose model
var mongoose = require('mongoose');

// define our player model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Player', {
	first : {type : String, default: ''},
	last : {type : String, default: ''}
});

