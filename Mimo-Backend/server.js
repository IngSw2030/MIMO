const express = require('express');
const connectDB = require('./config/db');
const io = require('socket.io')();
const messageHandler = require('./handlers/message.handler');
require('./src/models/Product');

const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//Connect Database
app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/testingRoute', require('./routes/api/testingRoute'));
app.use('/api/products', require('./src/routes/ProductRoutes'));

const PORT = process.env.PORT || 5000;

let currentUserId = 2;
const userIds = {};

io.on('connection', socket => {
	console.log('a user connected!');
	userIds[socket.id] = currentUserId++;
	messageHandler.handleMessage(socket, userIds);
});
console.log('Socket Listening on port 3001');
io.listen(3001);

app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`));
