const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
		enum: ['Paseos', 'Cuidadores', 'Limpiado de peceras', 'Peluqueria'],
	},
	name: {
		type: String,
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
	idUser: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

const Model = mongoose.model('Service', ServiceSchema);
