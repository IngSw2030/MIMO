const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Service = mongoose.model('Service');
const User = mongoose.model('User');

const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
	const { category, name, price, photo, description } = req.body;
	console.log('Entra');
	try {
		const service = new Service({
			category,
			name,
			price,
			photo,
			description,
			idUser: req.user._id,
		});
		await service.save();
		res.send({ service });
	} catch (err) {
		console.log(err);
		res.status(422).send(err.message);
	}
});

//Query para encontrar todas las veterinarias por nombre
router.get('/allServices', async (req, res) => {
	const { name, description, category } = req.body;

	let newName, newDescription;

	if (!description) {
		if (!name) {
			newName = '';
		} else {
			newName = name;
		}
	} else {
		newName = '-1';
	}

	!description ? (newDescription = '-1') : (newDescription = description);

	try {
		const services = await Service.find({
			$or: [
				{ $and: [{ name: { $regex: newName, $options: 'i' } }, { category: category }] },
				{ description: { $regex: newDescription, $options: 'i' } },
			],
		}).limit(25);
		res.send({ services });
	} catch (err) {
		res.status(422).send({ error: 'No se ha podido publicar el producto' });
	}
});

//Query para encontrar todas las veterinarias por nombre
router.get('/getServices', async (req, res) => {
	try {
		const services = await Service.find();
		services.forEach(async service => {
			const retailer = await User.findById(service.idUser);
			if (retailer) {
				service = { ...service, retailerName: retailer.name };
			}
		});
		res.send({ services });
	} catch (err) {
		res.status(422).send({ error: 'No se ha podido publicar el producto' });
	}
});
router.post('/myServices', async (req, res) => {
	try {
		const services = await Service.find({
			idUser: req.user._id,
		}).limit(25);

		res.send({ services });
	} catch (err) {
		console.log('Error myServices');
		res.status(422).send({ error: 'No se han encontrado productos' });
	}
});
router.post('/update', async (req, res) => {
	try {
		const { name, price, photo, description, id } = req.body;

		const service = await Service.findOne({ _id: id });

		let newName, newPrice, newDescription, newPhoto;

		!name ? (newName = service.name) : (newName = name);

		!price ? (newPriceMin = service.price) : (newPrice = price);

		!description ? (newDescription = service.description) : (newDescription = description);

		!photo ? (newPhoto = service.photo) : (newPhoto = photo);

		await Service.findOneAndUpdate(
			{ _id: id },
			{
				$set: {
					name: newName,
					price: newPrice,
					description: newDescription,
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
		await Service.findByIdAndDelete(id);
		res.send('Servicio borrado satisfactoriamente');
	} catch (error) {
		return res.status(422).send({ error: 'Error eliminando la mascota' });
	}
});

module.exports = router;
