'use strict';

var path = require('path'),
		persistence = require(path.join(__dirname, '../middlewares/persistence'));

var LogEntity = {
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
};

var UserEntity = {
	login: { type: String, unique: true },
	password: String,
	firstName: String,
	lastName: String,
	roles: [ String ],
	logs: [ LogEntity ]
};

var UserSchema = new persistence.mongoose.Schema(UserEntity);

module.exports = persistence.mongoose.model('Users', UserSchema);
