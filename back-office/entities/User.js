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
	serviceProviders: [ String ],
	logs: [ LogEntity ]
};

var UserSchema = new persistence.mongoose.Schema(UserEntity);

UserSchema.pre('save', function (next) {
  if (this.login === null || this.login === '') {
  	return next(new Error('Login cannot be blank'));
  }

  if (this.password === null || this.password === '') {
  	return next(new Error('Password cannot be blank'));
  }

  next();
});

module.exports = persistence.mongoose.model('Users', UserSchema);

module.exports.DEFAULT_PASSWORD = 'e047287a9d4b38f3c6391f24522eee26'; // changeItImmediately
