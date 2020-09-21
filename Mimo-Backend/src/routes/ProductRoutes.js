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
        available
    } = req.body;
    
    try {
        const product = new Product({
            category,
            name,
            price,
            photo,
            description,
            retailName: req.user.retailName,
            available,
            idUser: req.user._id,
        });
        await product.save();
        res.send({ product });
    } catch (err) {
        res.status(422).send({ error: "No se ha podido guardar el producto" });
    }
});

router.post('/update', async (req, res) => {
    try {

        const { 
            name,
            price,
            photo,
            description,
            available,
            id 
        } = req.body;

        const product = await Product.findOne({_id: id});

        let newName, newPrice, newDescription, newAvailable, newPhoto;

        !name ? newName = product.name : newName = name;

        !price ? newPrice = product.price : newPrice = price;

        !description ? newDescription = product.description : newDescription = description;

        !available ? newAvailable = product.available : newAvailable = available;
        
        !photo ? newPhoto = product.photo : newPhoto = photo;

        await Product.findOneAndUpdate({ _id: id }, { $set: { 
            "name": newName,
            "price": newPrice,
            "description": newDescription,
            "available": newAvailable,
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
        await Product.findByIdAndDelete(id);
        res.send("Producto borrada satisfactoriamente");
    } catch (error) {
        return res.status(422).send({ error: 'Error eliminando la mascota' });
    }
});

module.exports = router;