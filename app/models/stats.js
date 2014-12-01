/* app/models/stats.js */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatsSchema = new Schema(
	{
		id: String,
		scheduled: Date,
		status: String,
		home_team:{
			id: String,
			name: String,
			market: String,
			remaining_challenges: Number,
			remaining_timeouts: Number,
			points: Number,
			statistics:{
				two_point_conversion: {
					team: {
						att: Number,
						pass: Number,
						rush: Number,
						rec: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						att: Number,
						pass: Number,
						rush: Number,
						rec: Number
					}]
				},
				touchdowns: {
					team: {
						pass: Number,
						rush: Number,
						int: Number,
						fum_ret: Number,
						punt_ret: Number,
						kick_ret: Number,
						fg_ret: Number,
						other: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						pass: Number,
						rush: Number,
						int: Number,
						fum_ret: Number,
						punt_ret: Number,
						kick_ret: Number, 
						fg_ret: Number,
						other: Number
					}]
				},
				third_down_efficiency:{
					team:{
						att: Number,
						conv: Number,
						pct: Number,
						pass: Number,
						rush: Number,
						pen: Number
					}
				},
				rushing:{
					team:{
						att: Number,
						yds: Number,
						avg: Number,
						lg: Number,
						td: Number,
						fd: Number,
						fd_pct: Number,
						sfty: Number,
						rz_att: Number,
						fum: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						att: Number,
						yds: Number,
						avg: Number,
						lg: Number,
						td: Number,
						fd: Number,
						fd_pct: Number,
						sfty: Number,
						rz_att: Number,
						fum: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				redzone_efficiency: {
					team: {
						att: Number,
						td: Number,
						pct: Number
					}
				},
				receiving: {
					team: {
						tar: Number,
						rec: Number,
						yds: Number,
						yac: Number,
						fd: Number,
						avg: Number,
						td: Number,
						lg: Number,
						rz_tar: Number,
						fum: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						tar: Number,
						rec: Number,
						yds: Number,
						yac: Number,
						fd: Number,
						avg: Number,
						td: Number,
						lg: Number,
						rz_tar: Number,
						fum: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				punting: {
					team: {
						punts: Number,
						yds: Number,
						net_yds: Number,
						lg: Number,
						blk: Number,
						in20: Number,
						tb: Number,
						ret: Number,
						sfty: Number,
						avg: Number,
						net_avg: Number,
						ret_yds: Number,
						avg_ret: Number,
						in20_pct: Number,
						tb_pct: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						punts: Number,
						yds: Number,
						net_yds: Number,
						lg: Number,
						blk: Number,
						in20: Number,
						tb: Number,
						ret: Number,
						sfty: Number,
						avg: Number,
						net_avg: Number,
						ret_yds: Number,
						avg_ret: Number,
						in20_pct: Number,
						tb_pct: Number
					}]
				},
				punt_return: {
					team: {
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				penalty: {
					team: {
						num: Number,
						yds: Number,
						fd: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						num: Number,
						yds: Number,
						fd: Number
					}]
				},
				passing: {
					team: {
						att: Number,
						cmp: Number,
						yds: Number,
						lg: Number,
						sk: Number,
						sk_yds: Number,
						td: Number,
						int: Number,
						int_td: Number,
						fd: Number,
						sfty: Number,
						rz_att: Number,
						rating: Number,
						avg: Number,
						cmp_pct: Number,
						cmp_avg: Number,
						td_pct: Number,
						int_pct: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						att: Number,
						cmp: Number,
						yds: Number,
						lg: Number,
						sk: Number,
						sk_yds: Number,
						td: Number,
						int: Number,
						int_td: Number,
						fd: Number,
						sfty: Number,
						rz_att: Number,
						rating: Number,
						avg: Number,
						cmp_pct: Number,
						cmp_avg: Number,
						td_pct: Number,
						int_pct: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				kickoffs: {
					team: {
						kicks: Number,
						yds: Number,
						net_yds: Number,
						lg: Number,
						endzone: Number,
						in20: Number,
						tb: Number,
						ret: Number,
						avg: Number,
						net_avg: Number,
						ret_yds: Number,
						avg_ret: Number,
						in20_pct: Number,
						tb_pct: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						kkicks: Number,
						yds: Number,
						net_yds: Number,
						lg: Number,
						endzone: Number,
						in20: Number,
						tb: Number,
						ret: Number,
						avg: Number,
						net_avg: Number,
						ret_yds: Number,
						avg_ret: Number,
						in20_pct: Number,
						tb_pct: Number
					}]
				},
				kick_return: {
					team: {
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				goal_efficiency: {
					team: {
						att: Number,
						td: Number,
						pct: Number
					}
				},
				fumbles: {
					team: {
						fum: Number,
						lost: Number,
						oob: Number,
						own_rec: Number,
						own_rec_yds: Number,
						own_rec_td: Number,
						force_fum: Number,
						opp_rec: Number,
						opp_rec_yds: Number,
						opp_rec_td: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						fum: Number,
						lost: Number,
						oob: Number,
						own_rec: Number,
						own_rec_yds: Number,
						own_rec_td: Number,
						force_fum: Number,
						opp_rec: Number,
						opp_rec_yds: Number,
						opp_rec_td: Number
					}]
				},
				fourth_down_efficiency: {
					team: {
						att: Number,
						conv: Number,
						pct: Number,
						pass: Number,
						rush: Number,
						pen: Number
					}
				},
				first_downs: {
					team: {
						num: Number,
						pass: Number,
						rush: Number,
						pen: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						num: Number,
						pass: Number,
						rush: Number,
						pen: Number
					}]
				},
				field_goal_return: {
					team: {
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				field_goal: {
					team: {
						att: Number,
						made: Number,
						pct: Number,
						lg: Number,
						att_19: Number,
						made_19: Number,
						att_29: Number,
						made_29: Number,
						att_39: Number,
						made_39: Number,
						att_49: Number,
						made_49: Number,
						att_50: Number,
						made_50: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						att: Number,
						made: Number,
						pct: Number,
						lg: Number,
						blk: Number,
						att_19: Number,
						made_19: Number,
						att_29: Number,
						made_29: Number,
						att_39: Number,
						made_39: Number,
						att_49: Number,
						made_49: Number,
						att_50: Number,
						made_50: Number
					}]
				},
				extra_point: {
					team: {
						att: Number,
						made: Number,
						pct: Number,
						blk: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						att: Number,
						made: Number,
						pct: Number,
						blk: Number
					}]
				},
				defense: {
					team: {
						tackle: Number,
						ast: Number,
						comb: Number,
						tlost: Number,
						sack: Number,
						sack_yds: Number,
						sfty: Number,
						int: Number,
						int_yds: Number,
						int_lg: Number,
						int_td: Number,
						force_fum: Number,
						fum_rec: Number,
						fum_td: Number,
						qh: Number,
						pd: Number,
						bk: Number,
						sp_tackle: Number,
						sp_ast: Number,
						sp_comb: Number,
						sp_force_fum: Number,
						sp_fum_rec: Number,
						misc_tackle: Number,
						misc_ast: Number,
						misc_comb: Number,
						misc_force_fum: Number,
						misc_fum_rec: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						tackle: Number,
						ast: Number,
						comb: Number,
						tlost: Number,
						sack: Number,
						sack_yds: Number,
						sfty: Number,
						int: Number,
						int_yds: Number,
						int_lg: Number,
						int_td: Number,
						force_fum: Number,
						fum_rec: Number,
						fum_td: Number,
						qh: Number,
						pd: Number,
						bk: Number,
						sp_tackle: Number,
						sp_ast: Number,
						sp_comb: Number,
						sp_force_fum: Number,
						sp_fum_rec: Number,
						misc_tackle: Number,
						misc_ast: Number,
						misc_comb: Number,
						misc_force_fum: Number,
						misc_fum_rec: Number
					}]
				},
				blocked_punt_return: {
					team: {
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				blocked_field_goal_return: {
					team: {
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				}
			} // statistics
		}, // home team
		away_team:{
			id: String,
			name: String,
			market: String,
			remaining_challenges: Number,
			remaining_timeouts: Number,
			points: Number,
			statistics:{
				two_point_conversion: {
					team: {
						att: Number,
						pass: Number,
						rush: Number,
						rec: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						att: Number,
						pass: Number,
						rush: Number,
						rec: Number
					}]
				},
				touchdowns: {
					team: {
						pass: Number,
						rush: Number,
						int: Number,
						fum_ret: Number,
						punt_ret: Number,
						kick_ret: Number,
						fg_ret: Number,
						other: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						pass: Number,
						rush: Number,
						int: Number,
						fum_ret: Number,
						punt_ret: Number,
						kick_ret: Number, 
						fg_ret: Number,
						other: Number
					}]
				},
				third_down_efficiency:{
					team:{
						att: Number,
						conv: Number,
						pct: Number,
						pass: Number,
						rush: Number,
						pen: Number
					}
				},
				rushing:{
					team:{
						att: Number,
						yds: Number,
						avg: Number,
						lg: Number,
						td: Number,
						fd: Number,
						fd_pct: Number,
						sfty: Number,
						rz_att: Number,
						fum: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						att: Number,
						yds: Number,
						avg: Number,
						lg: Number,
						td: Number,
						fd: Number,
						fd_pct: Number,
						sfty: Number,
						rz_att: Number,
						fum: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				redzone_efficiency: {
					team: {
						att: Number,
						td: Number,
						pct: Number
					}
				},
				receiving: {
					team: {
						tar: Number,
						rec: Number,
						yds: Number,
						yac: Number,
						fd: Number,
						avg: Number,
						td: Number,
						lg: Number,
						rz_tar: Number,
						fum: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						tar: Number,
						rec: Number,
						yds: Number,
						yac: Number,
						fd: Number,
						avg: Number,
						td: Number,
						lg: Number,
						rz_tar: Number,
						fum: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				punting: {
					team: {
						punts: Number,
						yds: Number,
						net_yds: Number,
						lg: Number,
						blk: Number,
						in20: Number,
						tb: Number,
						ret: Number,
						sfty: Number,
						avg: Number,
						net_avg: Number,
						ret_yds: Number,
						avg_ret: Number,
						in20_pct: Number,
						tb_pct: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						punts: Number,
						yds: Number,
						net_yds: Number,
						lg: Number,
						blk: Number,
						in20: Number,
						tb: Number,
						ret: Number,
						sfty: Number,
						avg: Number,
						net_avg: Number,
						ret_yds: Number,
						avg_ret: Number,
						in20_pct: Number,
						tb_pct: Number
					}]
				},
				punt_return: {
					team: {
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				penalty: {
					team: {
						num: Number,
						yds: Number,
						fd: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						num: Number,
						yds: Number,
						fd: Number
					}]
				},
				passing: {
					team: {
						att: Number,
						cmp: Number,
						yds: Number,
						lg: Number,
						sk: Number,
						sk_yds: Number,
						td: Number,
						int: Number,
						int_td: Number,
						fd: Number,
						sfty: Number,
						rz_att: Number,
						rating: Number,
						avg: Number,
						cmp_pct: Number,
						cmp_avg: Number,
						td_pct: Number,
						int_pct: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						att: Number,
						cmp: Number,
						yds: Number,
						lg: Number,
						sk: Number,
						sk_yds: Number,
						td: Number,
						int: Number,
						int_td: Number,
						fd: Number,
						sfty: Number,
						rz_att: Number,
						rating: Number,
						avg: Number,
						cmp_pct: Number,
						cmp_avg: Number,
						td_pct: Number,
						int_pct: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				kickoffs: {
					team: {
						kicks: Number,
						yds: Number,
						net_yds: Number,
						lg: Number,
						endzone: Number,
						in20: Number,
						tb: Number,
						ret: Number,
						avg: Number,
						net_avg: Number,
						ret_yds: Number,
						avg_ret: Number,
						in20_pct: Number,
						tb_pct: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						kkicks: Number,
						yds: Number,
						net_yds: Number,
						lg: Number,
						endzone: Number,
						in20: Number,
						tb: Number,
						ret: Number,
						avg: Number,
						net_avg: Number,
						ret_yds: Number,
						avg_ret: Number,
						in20_pct: Number,
						tb_pct: Number
					}]
				},
				kick_return: {
					team: {
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				goal_efficiency: {
					team: {
						att: Number,
						td: Number,
						pct: Number
					}
				},
				fumbles: {
					team: {
						fum: Number,
						lost: Number,
						oob: Number,
						own_rec: Number,
						own_rec_yds: Number,
						own_rec_td: Number,
						force_fum: Number,
						opp_rec: Number,
						opp_rec_yds: Number,
						opp_rec_td: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						fum: Number,
						lost: Number,
						oob: Number,
						own_rec: Number,
						own_rec_yds: Number,
						own_rec_td: Number,
						force_fum: Number,
						opp_rec: Number,
						opp_rec_yds: Number,
						opp_rec_td: Number
					}]
				},
				fourth_down_efficiency: {
					team: {
						att: Number,
						conv: Number,
						pct: Number,
						pass: Number,
						rush: Number,
						pen: Number
					}
				},
				first_downs: {
					team: {
						num: Number,
						pass: Number,
						rush: Number,
						pen: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						num: Number,
						pass: Number,
						rush: Number,
						pen: Number
					}]
				},
				field_goal_return: {
					team: {
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				field_goal: {
					team: {
						att: Number,
						made: Number,
						pct: Number,
						lg: Number,
						att_19: Number,
						made_19: Number,
						att_29: Number,
						made_29: Number,
						att_39: Number,
						made_39: Number,
						att_49: Number,
						made_49: Number,
						att_50: Number,
						made_50: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						att: Number,
						made: Number,
						pct: Number,
						lg: Number,
						blk: Number,
						att_19: Number,
						made_19: Number,
						att_29: Number,
						made_29: Number,
						att_39: Number,
						made_39: Number,
						att_49: Number,
						made_49: Number,
						att_50: Number,
						made_50: Number
					}]
				},
				extra_point: {
					team: {
						att: Number,
						made: Number,
						pct: Number,
						blk: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						att: Number,
						made: Number,
						pct: Number,
						blk: Number
					}]
				},
				defense: {
					team: {
						tackle: Number,
						ast: Number,
						comb: Number,
						tlost: Number,
						sack: Number,
						sack_yds: Number,
						sfty: Number,
						int: Number,
						int_yds: Number,
						int_lg: Number,
						int_td: Number,
						force_fum: Number,
						fum_rec: Number,
						fum_td: Number,
						qh: Number,
						pd: Number,
						bk: Number,
						sp_tackle: Number,
						sp_ast: Number,
						sp_comb: Number,
						sp_force_fum: Number,
						sp_fum_rec: Number,
						misc_tackle: Number,
						misc_ast: Number,
						misc_comb: Number,
						misc_force_fum: Number,
						misc_fum_rec: Number
					},
					players: [{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						tackle: Number,
						ast: Number,
						comb: Number,
						tlost: Number,
						sack: Number,
						sack_yds: Number,
						sfty: Number,
						int: Number,
						int_yds: Number,
						int_lg: Number,
						int_td: Number,
						force_fum: Number,
						fum_rec: Number,
						fum_td: Number,
						qh: Number,
						pd: Number,
						bk: Number,
						sp_tackle: Number,
						sp_ast: Number,
						sp_comb: Number,
						sp_force_fum: Number,
						sp_fum_rec: Number,
						misc_tackle: Number,
						misc_ast: Number,
						misc_comb: Number,
						misc_force_fum: Number,
						misc_fum_rec: Number
					}]
				},
				blocked_punt_return: {
					team: {
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				},
				blocked_field_goal_return: {
					team: {
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					},
					players:[{
						id: String,
						name: String,
						jersey: Number,
						position: String,
						returns: Number,
						yds: Number,
						fc: Number,
						lg: Number,
						td: Number,
						avg: Number,
						yds_10_pls: Number,
						yds_20_pls: Number,
						yds_30_pls: Number,
						yds_40_pls: Number,
						yds_50_pls: Number
					}]
				}
			} // statistics
		} // away team
	});

module.exports = mongoose.model('game_stat', StatsSchema);
