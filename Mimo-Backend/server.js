const express = require('express');
const connectDB = require('./config/db');

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

app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`));
