const express = require('express');
const connectDB = require('./config/db');
require('./src/models/User');
require('./src/models/Pet');
require('./src/models/Product');
require('./src/models/Purchase');
require('./src/models/Review');
require('./src/models/Service');
require('./src/models/Veterinary');




const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//Connect Database
app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/testingRoute', require('./routes/api/testingRoute'));
app.use('/api/user', require('./src/routes/UserRoutes'));
app.use('/api/Auth', require('./src/routes/AuthRoutes'));
app.use('/api/Pet', require('./src/routes/PetRoutes'));
app.use('/api/Product', require('./src/routes/ProductRoutes'));
app.use('/api/Purchase', require('./src/routes/PurchaseRoutes'));
app.use('/api/Review', require('./src/routes/ReviewRoutes'));
app.use('/api/Service', require('./src/routes/ServiceRoutes'));
app.use('/api/Veterinary', require('./src/routes/VeterinaryRoutes'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`));
