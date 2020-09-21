const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    dateSent:{
        type: Date,
        default: Date.now,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    idUserSend: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    idUserRecieve: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});
mongoose.model('Message', MessageSchema);