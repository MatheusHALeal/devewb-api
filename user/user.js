const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	profile_name: {
		type: String,
		default: this.username
	},
	username: {
		type: String,
		required: true,
		unique: true
	}

});

module.exports = mongoose.model('User', UserSchema);
