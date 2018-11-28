const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
	name: {
		type: String,
    require: true
	}


});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
