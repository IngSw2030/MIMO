const mongoose = require('mongoose');

const VetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	animals: {
		type: [String],
		required: true,
	},
	photo: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	reviews: [
		{
			author: {
				type: [mongoose.Schema.Types.ObjectId],
				ref: 'Customer',
				required: true,
			},
			score: {
				type: String,
				required: true,
			},
		},
	],
	average_score: {
		type: Number,
		required: true,
	},
});

mongoose.model('Vet', VetSchema);
