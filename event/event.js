const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GeoJSON = require('geojson');

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
  },
	city: {
		type: String,
		require: true
	},
	image: {
		type: String,
		require: true

	}
//	author: [{ type: Schema.Types.ObjectId, ref: 'User' }]

});

module.exports = mongoose.model('Event', EventSchema);
