const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const User = mongoose.model('User');

const router = express.Router();
router.use(requireAuth);

router.post('/save', async (req, res) => {
	const { email, name, password, phone, userType, retailName, address, photo } = req.body;

	try {
		const user = new User({
			email,
			name,
			password,
			phone,
			userType,
			retailName,
			address,
			photo,
		});
		await user.save();
		res.send({ user });
	} catch (err) {
		res.status(422).send({ error: 'No se ha podido publicar el producto' });
	}
});

router.get('/delete', async (req, res) => {
	try {
		await User.findByIdAndDelete(req.user._id);
		res.send('Usuario borrado satisfactoriamente');
	} catch (error) {
		return res.status(422).send({ error: 'Error eliminando la cuenta' });
	}
});

router.post('/update', async (req, res) => {
	try {
		console.log("dentro de la route---");
		const { name, phone, retailName, address, photo } = req.body;

		let newName, newPassword, newPhone, newRetailName, newAddress, newPhoto;

		!name ? (newName = req.user.name) : (newName = name);

		newPassword = req.user.password;

		!phone ? (newphone = req.user.phone) : (newPhone = phone);

		!retailName ? (newRetailName = req.user.retailName) : (newRetailName = retailName);

		!address ? (newAddress = req.user.address) : (newAddress = address);

		!photo ? (newPhoto = req.user.photo) : (newPhoto = photo);

		await User.findOneAndUpdate(
			{ _id: req.user._id },
			{
				$set: {
					name: newName,
					password: newPassword,
					phone: newPhone,
					retailName: newRetailName,
					address: newAddress,
					photo: newPhoto,
				},
			},
			{ useFindAndModify: false }
		);
		res.send(req.user);
	} catch (err) {
		return res.status(422).send({ error: 'Error al modificar' });
	}
});

router.get('/find', async (req, res) => {
	try {
		const user = await User.findById(req.user._id);
		res.send({ user });
	} catch (err) {
		res.status(422).send({ error: 'No se ha podido publicar el producto' });
	}
});

//Query para encontrar todas las veterinarias por nombre
router.get('/allUsers', async (req, res) => {
	const { name } = req.body;

	let newName;

	if (!name) {
		newName = '';
	} else {
		newName = name;
	}

	try {
		const users = await User.find({ $or: [{ name: { $regex: newName, $options: 'i' } }] }).limit(25);
		res.send({ users });
	} catch (err) {
		res.status(422).send({ error: 'No se ha podido publicar el producto' });
	}
});

module.exports = router;
