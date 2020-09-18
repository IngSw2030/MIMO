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

module.exports = router;