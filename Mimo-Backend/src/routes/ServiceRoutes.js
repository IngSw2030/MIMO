const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Service = mongoose.model('Service');
const User = mongoose.model('User');
const Review = mongoose.model('Review');

const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
	const { category, name, priceMax, priceMin, photo, description } = req.body;
	console.log('Entra');
	try {
		const service = new Service({
			category,
			name,
			priceMax,
			priceMin,
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

router.post('/updateAvgScore', async (req, res) => {
	try {
		const {
			score,
			id
		} = req.body;
		const services = await Service.findOne({ _id: id });

		let antiguoScore = services.avgScore;
		const numeroReview = await Review.where({ idService: services._id }).countDocuments();
		const aux = (numeroReview - 1) * antiguoScore;
		let nuevoScore = (aux + score) / (numeroReview);

		await Service.findOneAndUpdate({ _id: id }, {
			$set: {
				"avgScore": nuevoScore,
			}
		}, { useFindAndModify: false });
		res.send({ nuevoScore });
	} catch (err) {
		return res.status(422).send({ error: 'Error al modificar' });
	}
})


router.post('/update', async (req, res) => {
	try {

		const {
			name,
			priceMax,
			priceMin,
			photo,
			description,
			id
		} = req.body;

		const service = await Service.findOne({ _id: id });

		let newName, newPriceMax, newPriceMin, newDescription, newPhoto;

		!name ? newName = service.name : newName = name;

		!priceMax ? newPriceMax = service.priceMax : newPriceMax = priceMax;

		!priceMin ? newPriceMin = service.priceMin : newPriceMin = priceMin;

		!description ? newDescription = service.description : newDescription = description;

		!photo ? newPhoto = service.photo : newPhoto = photo;

		await Service.findOneAndUpdate({ _id: id }, {
			$set: {
				"name": newName,
				"priceMin": newPriceMin,
				"priceMax": newPriceMax,
				"description": newDescription,
				"photo": newPhoto
			}
		}, { useFindAndModify: false });
		res.send("Modificado satisfactoriamente");
	} catch (err) {
		return res.status(422).send({ error: 'Error al modificar' });
	}
});
router.post('/allServices', async (req, res) => {
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
//Trae TODOS los servicios
router.get('/getAllAvailableServices', async (req, res) => {
	try {
		const services = await Service.find({ available: true });
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

router.post('/delete', async (req, res) => {
	const { id } = req.body;
	try {
		console.log(id);
		await Service.findByIdAndDelete(id);
		res.send('Servicio borrado satisfactoriamente');
	} catch (error) {
		return res.status(422).send({ error: 'Error eliminando la mascota' });
	}
});

module.exports = router;
