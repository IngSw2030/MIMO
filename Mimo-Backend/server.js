const express = require('express');
const connectDB = require('./config/db');
const io = require('socket.io')();
const messageHandler = require('./handlers/message.handler');
require('./src/models/User');
require('./src/models/Pet');
require('./src/models/Product');
require('./src/models/Purchase');
require('./src/models/Review');
require('./src/models/Service');
require('./src/models/Veterinary');
require('./src/models/Message');



const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//Connect Database
app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/testingRoute', require('./routes/api/testingRoute'));
app.use('/api/User', require('./src/routes/UserRoutes'));
app.use('/api/Auth', require('./src/routes/AuthRoutes'));
app.use('/api/Pet', require('./src/routes/PetRoutes'));
app.use('/api/Product', require('./src/routes/ProductRoutes'));
app.use('/api/Purchase', require('./src/routes/PurchaseRoutes'));
app.use('/api/Review', require('./src/routes/ReviewRoutes'));
app.use('/api/Service', require('./src/routes/ServiceRoutes'));
app.use('/api/Veterinary', require('./src/routes/VeterinaryRoutes'));
app.use('/api/Message', require('./src/routes/MessageRoutes'));


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
