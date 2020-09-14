const mongoose = require('mongoose');

const RetailerSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	catalogo_productos: [
		{
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'Product',
			required: false,
		},
	],
	catalogo_servicios: [
		{
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'Sevicice',
			required: false,
		},
	],
	Veterinaria: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Vet',
		required: false,
	},
});

mongoose.model('Retailer', RetailerSchema);
