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
    datePurchased:{
        type: Date,
        default: Date.now,
        required: true
    }
});

mongoose.model('Purchase', PurchaseSchema);