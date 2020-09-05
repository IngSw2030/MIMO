const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	nombre: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	purchase_history: [
		{
			purchase: {
				type: [mongoose.Schema.Types.ObjectId],
				ref: 'Product',
				required: true,
			},
			date: {
				type: Date,
				required: true,
			},
		},
	],
	pet: [
		{
			name: {
				type: String,
				required: true,
			},
			age: {
				type: Number,
				required: true,
			},
			gender: {
				type: Boolean,
				required: true,
			},
			specie: {
				type: String,
				required: true,
			},
			photo: {
				type: String,
				required: false,
			},
		},
	],
});
mongoose.model('Customer', CustomerSchema);
