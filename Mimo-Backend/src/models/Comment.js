const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    content:{
        type: String,
        required: true,
    },
    dateCreated:{
        type: Date,
        default: Date.now,
        required: true,
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    idPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },

});
mongoose.model('Comment', CommentSchema);