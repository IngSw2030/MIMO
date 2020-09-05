const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route GET api/Test
// @desc Test Route
// @access Public
router.get('/', (req, res) => {
	console.log(req.body);
	res.send('Ruta de prueba');
});

module.exports = router;
