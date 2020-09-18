const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Product = mongoose.model('Product');

const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
    const {
        category,
        name,
        price,
        photo,
        description,
    } = req.body;

    try {
        const product = new Product({
            category,
            name,
            price,
            photo,
            description,
            idUser: req.user._id,
        });
        await product.save();
        res.send({ product });
    } catch (err) {
        res.status(422).send({ error: "No se ha podido guardar el producto" });
    }
});

module.exports = router;