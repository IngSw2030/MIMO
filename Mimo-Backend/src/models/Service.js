const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	price_max: {
		type: Number,
		required: true,
	},
	price_min: {
		type: Number,
		required: true,
	},
	photo: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: true,
	},
});

mongoose.model('Service', ServiceSchema);
