const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
	conversations: {},
	selfUser: {
		avatar: {
			type: String,
			required: false,
		},
		userId: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
	},
	usersOnline: {
		type: [selfUser],
	},
});
mongoose.model('Message', MessageSchema);
