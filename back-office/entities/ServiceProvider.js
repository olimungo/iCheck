'use strict';

var path = require('path'),
		persistence = require(path.join(__dirname, '../middlewares/persistence'));

var log = new persistence.mongoose.Schema({
	date: Date,
	// status:
	//   WD = worked whole day
	//   OM = off for the morning
	//   OA = off for the afternoon
	//   OD = off the whole day
	//   CH = Commission holiday
  status: String,
  t1: String,
  t2: String,
  t3: String,
  t4: String,
  comment: String
});

var ServiceProviderSchema = new persistence.mongoose.Schema({
	login: { type: String, unique: true },
	password: String,
	logs: [ log ]
});

module.exports = persistence.mongoose.model('ServiceProvider', ServiceProviderSchema);
