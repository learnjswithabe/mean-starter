// app/models/player.js
// grab the mongoose model
var mongoose = require('mongoose');

// define our player model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Player', {
	first : {type : String, default: ''},
	last : {type : String, default: ''},
	pyds : {type : Number, default: '0'},
	ptds : {type : Number, default: '0'},
	ruyds : {type : Number, default: '0'},
	rutds : {type : Number, default: '0'},
	retds : {type : Number, default: '0'},
	reyds : {type : Number, default: '0'}
});

