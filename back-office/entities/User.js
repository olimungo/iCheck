'use strict';

var path = require('path'),
		persistence = require(path.join(__dirname, '../middlewares/persistence'));

var UserSchema = new persistence.mongoose.Schema({
	login: { type: String, unique: true },
	password: String,
	roles: [ String ]
});

module.exports = persistence.mongoose.model('Users', UserSchema);
module.exports.Schema = UserSchema;
