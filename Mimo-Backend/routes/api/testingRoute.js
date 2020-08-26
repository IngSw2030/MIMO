const e = require('express');

const express = require('express');
const router = express.Router();

// @route GET api/Test
// @desc Test Route
// @access Public
router.get('/', (req, res) =>
	res.send('Ruta de prueba')
);

module.exports = router;
