const mongoose = require('mongoose');

const VeterinarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    animals: {
        type: [ String ],
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    },
    avgScore: {
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: false,
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

mongoose.model('Veterinary', VeterinarySchema);