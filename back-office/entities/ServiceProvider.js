'use strict';

var path = require('path'),
		persistence = require(path.join(__dirname, '../middlewares/persistence'));

var ServiceProviderSchema = new persistence.mongoose.Schema({
	login: { type: String, unique: true },
	password: { type: String, unique: false }
});

module.exports = persistence.mongoose.model('ServiceProvider', ServiceProviderSchema);
