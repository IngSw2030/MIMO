const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
	idUser: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	idProduct: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
		required: true,
	},
	amount: {
		type: Number,
		default: 69,
		required: true,
	},
	datePurchased: {
		type: Date,
		default: Date.now,
		required: true,
	},
	status: {
		type: String,
		default: 'En carrito',
		required: true,
	},
});

mongoose.model('Purchase', PurchaseSchema);
