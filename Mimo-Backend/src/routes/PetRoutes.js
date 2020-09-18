const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Pet = mongoose.model('Pet');

const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
    const {
        name,
        age,
        gender,
        species,
        photo,
    } = req.body;

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
        res.status(422).send({ error: "No se ha podido guardar la mascota" });
    }
});

module.exports = router;