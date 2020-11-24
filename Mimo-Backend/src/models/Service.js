const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
		enum: ['Paseos', 'Cuidador', 'Limpieza de Peceras', 'Estilista'],
	},
	priceMax: {
		type: Number,
		required: true,
	},
	priceMin: {
		type: Number,
		required: true,
	},
	available: {
		type: Boolean,
		required: true,
		default: true,
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
	avgScore: {
        type: Number,
        required: true,
        default: 0
    },
	idUser: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

const Model = mongoose.model('Service', ServiceSchema);
