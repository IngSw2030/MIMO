const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
        required: true,
        default: ""
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
    retailName:{
		type: String,
		required: false,
    },
    available:{
        type: Boolean,
        required: true,
    },
    pets: {
        type: [String],
        required: false,
    }
});

mongoose.model('Product', ProductSchema);