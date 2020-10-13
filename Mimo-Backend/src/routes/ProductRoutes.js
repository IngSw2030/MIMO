const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Product = mongoose.model('Product');

const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
	const { category, name, price, photo, description, pets, available } = req.body;

	try {
		const product = new Product({
			category,
			name,
			price,
			photo,
			description,
			retailName: req.user.retailName,
			available,
			pets,
			idUser: req.user._id,
		});
		await product.save();
		res.send({ product });
	} catch (err) {
		res.status(422).send({ error: 'No se ha podido guardar el producto' });
	}
});

router.post('/findByPets', async (req, res) => {
	try {
		console.log('req.body', req.body);
		const { pets } = req.body;

		var products;
		let petQuery;
		if (!pets) {
			products = await Product.find().limit(25);
		} else {
			petQuery = pets;
			products = await Product.find({ pets: petQuery }).limit(25);
		}

		res.send({ products });
	} catch (err) {
		console.log('req.body en error', req.body);
		res.status(422).send({ error: 'No se ha podido publicar el producto' });
	}
});
//Query para encontrar todas las veterinarias por nombre
router.get('/allProducts', async (req, res) => {
	const { name, description, pets, category } = req.body;

	let newName, newPets, newDescription;

	if (!description && !pets) {
		if (!name) {
			newName = '';
		} else {
			newName = name;
		}
	} else {
		newName = '-1';
	}

	!pets ? (newPets = '-1') : (newPets = pets);

	!description ? (newDescription = '-1') : (newDescription = description);

	try {
		const products = await Product.find({
			$or: [
				{ $and: [{ name: { $regex: newName, $options: 'i' } }, { category: category }] },
				{ description: { $regex: newDescription, $options: 'i' } },
				{ pets: newPets },
			],
		}).limit(25);
		res.send({ products });
	} catch (err) {
		res.status(422).send({ error: 'No se ha podido publicar el producto' });
	}
});

router.post('/update', async (req, res) => {
	try {
		const { name, price, photo, description, available, id } = req.body;

		const product = await Product.findOne({ _id: id });

		let newName, newPrice, newDescription, newAvailable, newPhoto;

		!name ? (newName = product.name) : (newName = name);

		!price ? (newPrice = product.price) : (newPrice = price);

		!description ? (newDescription = product.description) : (newDescription = description);

		!available ? (newAvailable = product.available) : (newAvailable = available);

		!photo ? (newPhoto = product.photo) : (newPhoto = photo);

		await Product.findOneAndUpdate(
			{ _id: id },
			{
				$set: {
					name: newName,
					price: newPrice,
					description: newDescription,
					available: newAvailable,
					photo: newPhoto,
				},
			},
			{ useFindAndModify: false }
		);
		res.send('Modificado satisfactoriamente');
	} catch (err) {
		return res.status(422).send({ error: 'Error al modificar' });
	}
});

router.get('/delete', async (req, res) => {
	const { id } = req.body;

	try {
		await Product.findByIdAndDelete(id);
		res.send('Producto borrada satisfactoriamente');
	} catch (error) {
		return res.status(422).send({ error: 'Error eliminando la mascota' });
	}
});

module.exports = router;
