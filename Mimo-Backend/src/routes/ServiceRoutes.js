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

        const service = await Service.findOne({_id: id});

        let newName, newPriceMax, newPriceMin, newDescription, newPhoto;

        !name ? newName = service.name : newName = name;

        !priceMax ? newPriceMax = service.priceMax : newPriceMax = priceMax;

        !priceMin ? newPriceMin = service.priceMin : newPriceMin = priceMin;

        !description ? newDescription = service.description : newDescription = description;
        
        !photo ? newPhoto = service.photo : newPhoto = photo;

        await Service.findOneAndUpdate({ _id: id }, { $set: { 
            "name": newName,
            "priceMin": newPriceMin,
            "priceMax": newPriceMax,
            "description": newDescription,
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
        await Service.findByIdAndDelete(id);
        res.send("Servicio borrado satisfactoriamente");
    } catch (error) {
        return res.status(422).send({ error: 'Error eliminando la mascota' });
    }
});

module.exports = router;