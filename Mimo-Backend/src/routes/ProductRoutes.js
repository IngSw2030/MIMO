const express = require('express');
const mongoose = require('mongoose');

const Product = require('../models/Product');

const router = express.Router();

//Publicar un producto
router.post('/save', async (req, res) => {
    const {
        category,
        name,
        price,
        photo,
        description
    } = req.body;

    console.log(req.body);

    try {
        const product = new Product({
            category,
            name,
            price,
            photo,
            description
        });
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(422).send({ error: "No se ha podido publicar el producto" });
    }
});

module.exports = router;