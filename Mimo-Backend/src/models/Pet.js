const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
        type: Number,
        required: false,
    },
    gender: {
        type: Boolean,
        required: false,
    },
    species: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: "",
    }
});
mongoose.model('Pet', PetSchema);