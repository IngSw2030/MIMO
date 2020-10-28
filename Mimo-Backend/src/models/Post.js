const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    photo:{
        type: String,
        required: false,
        default: "" 
    },
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true,
    },
    dateCreated:{
        type: Date,
        default: Date.now,
        required: true,
    },
    tags: {
        type: [String],
        required: false
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    poster: {
        type: String,
        required: true,
    }

});
mongoose.model('Post', PostSchema);