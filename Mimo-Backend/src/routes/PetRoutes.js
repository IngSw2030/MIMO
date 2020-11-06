const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Pet = mongoose.model('Pet');

const router = express.Router();
router.use(requireAuth);

router.post('/save', async (req, res) => {
	const { name, age, gender, species, photo } = req.body;

	try {
		const pet = new Pet({
			name,
			age,
			gender,
			species,
			photo,
			idUser: req.user._id,
		});
		await pet.save();
		res.send({ pet });
	} catch (err) {
		res.status(422).send({ error: 'No se ha podido guardar la mascota' });
	}
});

//Query para encontrar mis mascotas
router.get('/myPets', async (req, res) => {

    try {
        const pets = await Pet.find({idUser: req.user._id});
        res.send({ pets });
    } catch (err) {
        res.status(422).send({ error: "No se han encontrado mascotas" });
    }
});

router.post('/update', async (req, res) => {
    try {
        
        const { 
            name,
            age,
            species,
            photo,
            id
		} = req.body;
		
		const pet = await Pet.findOne({ _id: id });

		let newName, newAge, newSpecies, newPhoto;

		!name ? (newName = pet.name) : (newName = name);

		!age ? (newAge = pet.age) : (newAge = age);

		!species ? (newSpecies = pet.species) : (newSpecies = species);

		!photo ? (newPhoto = pet.photo) : (newPhoto = photo);

		await Pet.findOneAndUpdate(
			{ _id: id },
			{
				$set: {
					name: newName,
					age: newAge,
					species: newSpecies,
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
		await Pet.findByIdAndDelete(id);
		res.send('Mascota borrada satisfactoriamente');
	} catch (error) {
		return res.status(422).send({ error: 'Error eliminando la mascota' });
	}
});

module.exports = router;
