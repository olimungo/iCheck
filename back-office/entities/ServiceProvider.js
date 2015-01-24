'use strict';

var path = require('path'),
		User = require(path.join(__dirname, '../entities/User')),
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

User.Schema.add({ logs: [ log ] });

module.exports = persistence.mongoose.model('Users', User.Schema);
