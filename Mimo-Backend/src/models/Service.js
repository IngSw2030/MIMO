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
    priceMax: {
        type: Number,
        required: true,
    },
    priceMin: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

mongoose.model('Service', ServiceSchema);