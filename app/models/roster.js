/* app/models/roster.js */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RosterSchema = new Schema(
	{
		id: String,
		scheduled: Date,
		status: String,
		home_team: {
			id: String,
			name: String,
			market: String,
			players: [
				{
					id: String,
					name_full: String,
					name_first: String,
					name_last: String,
					name_abbr: String,
					height: Number,
					weight: Number,
					college: String,
					position: String,
					jersey_number: Number,
					status: String,
					injuries:[
						{
							id: String,
							start_date: Date,
							game_status: String,
							practice_status: String,
							description: String
						}
					]
				}
			],
			coaches:[
				{
					id: String,
					name_full: String,
					name_first: String,
					name_last: String,
					name_abbr: String,
					position: String,
					status: String,
					salary: Number
				}
			]
		},
		away_team:{
			id: String,
			name: String,
			market: String,
			players: [
				{
					id: String,
					name_full: String,
					name_first: String,
					name_last: String,
					name_abbr: String,
					height: Number,
					weight: Number,
					college: String,
					position: String,
					jersey_number: Number,
					status: String,
					injuries:[
						{
							id: String,
							start_date: Date,
							game_status: String,
							practice_status: String,
							description: String
						}
					]
				}
			],
			coaches:[
				{
					id: String,
					name_full: String,
					name_first: String,
					name_last: String,
					name_abbr: String,
					position: String,
					status: String,
					salary: Number
				}
			]
		}
	}
);

module.exports = mongoose.model('game_roster', RosterSchema);
