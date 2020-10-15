const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
	conversation: {
		type: [
			{
				conversationID: {
					type: String,
					required: true,
				},
				messages: {
					type: [
						{
							id: {
								type: String,
								required: true,
							},
							createdAt: {
								type: Date,
								required: true,
							},
							text: {
								type: String,
								required: true,
							},
							user: {
								type: String,
								required: true,
							},
						},
					],
				},
				username: {
					type: String,
					required: true,
				},
			},
		],
	},

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
