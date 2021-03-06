const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
require('./src/models/User');
require('./src/models/Pet');
require('./src/models/Product');
require('./src/models/Purchase');
require('./src/models/Review');
require('./src/models/Service');
require('./src/models/Veterinary');
require('./src/models/Message');
require('./src/models/Post');
require('./src/models/Comment');

const app = express();

connectDB();

app.use(bodyParser.urlencoded({
	parameterLimit: 100000,
	limit: '30mb',
	extended: true
}));
app.use(bodyParser.json({ limit: '30mb' }));
//app.use(bodyParser.json({ limit: '20MB' }));

// Init Middleware
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json()); 

//Connect Database
app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/User', require('./src/routes/UserRoutes'));
app.use('/api/Auth', require('./src/routes/AuthRoutes'));
app.use('/api/Pet', require('./src/routes/PetRoutes'));
app.use('/api/Product', require('./src/routes/ProductRoutes'));
app.use('/api/Purchase', require('./src/routes/PurchaseRoutes'));
app.use('/api/Review', require('./src/routes/ReviewRoutes'));
app.use('/api/Service', require('./src/routes/ServiceRoutes'));
app.use('/api/Veterinary', require('./src/routes/VeterinaryRoutes'));
app.use('/api/Message', require('./src/routes/MessageRoutes'));
app.use('/api/Post', require('./src/routes/PostRoutes'));
app.use('/api/Comment', require('./src/routes/CommentRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`));

const io = require('socket.io')();
const uuidv1 = require('uuid/v1');
const messageHandler = require('./handlers/message.handler');

const users = {};

function createUserAvatarUrl() {
	const rand1 = Math.round(Math.random() * 200 + 100);
	const rand2 = Math.round(Math.random() * 200 + 100);
	return `https://placeimg.com/${rand1}/${rand2}/any`;
}

function createUsersOnline() {
	const values = Object.values(users);
	const onlyWithUsernames = values.filter(u => u.username !== undefined);
	return onlyWithUsernames;
}

userSocket = {}; //guarda el socket actual de los user
io.on('connection', socket => {
	console.log('a user connected!');
	console.log(socket.id);
	socket.on('disconnect', () => {
		console.log('Entre en el disconnect');
		delete users[socket.id]; //se libera el usuario y el socket.
		io.emit('action', { type: 'users_online', data: createUsersOnline() });
	});
	socket.on('action', action => {
		switch (action.type) {
			case 'server/setUser':
				//action.data es el correo del usuario.
				const userValues2 = Object.values(users);
				const previousConnection = userValues2.find(currentUser => currentUser.userId == action.data);
				if (previousConnection !== undefined) {
					//se asegura que solo exista una conexion por usuario
					delete previousConnection;
				}
				users[socket.id] = { userId: action.data }; //se relaciona un userId a un socket.
				console.log('users[socket.id] = ', users[socket.id]);
				break;
			case 'server/join':
				console.log('Got join event', action.data); //action.data es el nombre del usuario
				users[socket.id].username = action.data; //se asigna el nombre del usuario al socket.
				users[socket.id].avatar = createUserAvatarUrl(); //se asigna el avatar del usuario al socket.
				io.emit('action', {
					type: 'users_online',
					data: createUsersOnline(),
				});
				socket.emit('action', { type: 'self_user', data: users[socket.id] });
				break;
			case 'server/private_message':
				const conversationId = action.data.conversationId; //esto es el email del receptor
				const from = users[socket.id].userId; //email del emisor
				const userValues = Object.values(users);
				const socketIds = Object.keys(users);
				for (let i = 0; i < userValues.length; i++) {
					if (userValues[i].userId === conversationId) {
						const socketId = socketIds[i];
						io.sockets.sockets[socketId].emit('action', {
							type: 'private_message',
							data: {
								...action.data,
								conversationId: from,
							},
						});
						break;
					}
				}
				break;
		}
	});
});

io.listen(3001);
