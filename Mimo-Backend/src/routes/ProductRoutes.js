const express = require('express');
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

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
        console.log("hola");
        const product = new Product({
            category,
            name,
            price,
            photo,
            description
        });
        console.log("hola");
        console.log(product);
        await product.save();
        res.send({ product });
    } catch (err) {
        res.status(422).send({ error: "No se ha podido publicar el producto" });
    }
});

module.exports = router;