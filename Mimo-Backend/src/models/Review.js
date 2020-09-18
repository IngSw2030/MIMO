const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    score: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: false,
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    idVet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinary',
        required: true,
    }
});

mongoose.model('Review', ReviewSchema);