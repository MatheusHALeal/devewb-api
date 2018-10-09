const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var validateEmail = function(email) {
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

var UserSchema = new Schema({
	profile_name: {
		type: String,
		default: this.username
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
    validate: {
      validator: validateEmail,
      message: 'Email Inválido'
    }
	},
	password: {
		type: String,
		required: true
	},
	events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hash(password, bcrypt.genSaltSync(10), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', UserSchema);
