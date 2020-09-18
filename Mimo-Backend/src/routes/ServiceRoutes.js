const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Service = mongoose.model('Service');

const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
    const {
        category,
        name,
        priceMax,
        priceMin,
        photo,
        description,
    } = req.body;

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
        res.status(422).send({ error: "No se ha podido guardar el producto" });
    }
});

module.exports = router;