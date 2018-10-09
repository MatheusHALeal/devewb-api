const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EventSchema = new Schema({
	title: {
		type: String,
    require: true
	},
	description: {
		type: String,
		required: true
	},
  date:{
    type: Date,
    required: true,
    default: Date.now
  }

});

module.exports = mongoose.model('Event', EventSchema);
