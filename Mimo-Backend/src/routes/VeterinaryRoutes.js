const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Veterinary = mongoose.model('Veterinary');

const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
    const {
        name,
        animals,
        photo,
        address,
        avgScore,
    } = req.body;

    try {
        const veterinary = new Veterinary({
            name,
            animals,
            photo,
            address,
            avgScore,
            idUser: req.user._id,
        });
        await veterinary.save();
        res.send({ veterinary });
    } catch (err) {
        res.status(422).send({ error: err });
    }
});

router.post('/update', async (req, res) => {
    try {

        const { 
            name,
            animals,
            photo,
            address,
            avgScore,
            id 
        } = req.body;

        const veterinary = await Veterinary.findOne({_id: id});

        let newName, newAnimals, newAddress, newAvgScore, newPhoto;

        !name ? newName = veterinary.name : newName = name;

        !animals ? newAnimals = veterinary.animals : newAnimals = animals;

        !address ? newAddress = veterinary.address : newAddress = address;

        !avgScore ? newAvgScore = veterinary.avgScore : newAvgScore = avgScore;
        
        !photo ? newPhoto = veterinary.photo : newPhoto = photo;

        await Veterinary.findOneAndUpdate({ _id: id }, { $set: { 
            "name": newName,
            "animals": newAnimals,
            "address": newAddress,
            "avgScore": newAvgScore,
            "photo": newPhoto 
        }}, { useFindAndModify: false });
        res.send("Modificado satisfactoriamente");
    } catch (err) {
        return res.status(422).send({ error: 'Error al modificar' });
    }
});

router.get('/delete', async (req, res) => {
    const { id } = req.body;

    try {
        await Veterinary.findByIdAndDelete(id);
        res.send("Veterinaria borrada satisfactoriamente");
    } catch (error) {
        return res.status(422).send({ error: 'Error eliminando la mascota' });
    }
});

module.exports = router;