const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Veterinary = mongoose.model('Veterinary');
const Review = mongoose.model('Review');


const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
    const {
        name,
        animals,
        photo,
        address,
        description,
        contact,
        openAt,
        closeAt,
    } = req.body;

    try {
        const veterinary = new Veterinary({
            name,
            animals,
            photo,
            address,
            description,
            contact,
            openAt,
            closeAt,
            idUser: req.user._id,
        });
        await veterinary.save();
        res.send({ veterinary });
    } catch (err) {
        res.status(422).send({ error: err });
    }
});

router.post('/updateAvgScore', async (req, res) => {
    try {
        const {
            score,
            id
        } = req.body;
        console.log(id);
        const veterinary = await Veterinary.findOne({ _id: id });

        let antiguoScore = veterinary.avgScore;
        const numeroReview = await Review.where({ idVet: veterinary._id }).countDocuments();
        const aux = (numeroReview - 1) * antiguoScore;
        let nuevoScore = (aux + score) / (numeroReview);

        await Veterinary.findOneAndUpdate({ _id: id }, {
            $set: {
                "avgScore": nuevoScore,
            }
        }, { useFindAndModify: false });
        res.send({ nuevoScore });
    } catch (err) {
        return res.status(422).send({ error: 'Error al modificar' });
    }
})

router.post('/update', async (req, res) => {
    try {

        const {
            name,
            animals,
            photo,
            address,
            avgScore,
            description,
            contact,
            openAt,
            closeAt,
            id
        } = req.body;

        const veterinary = await Veterinary.findOne({ _id: id });

        let newName, newAnimals, newAddress, newAvgScore, newPhoto, newDescription;

        !name ? newName = veterinary.name : newName = name;

        !animals ? newAnimals = veterinary.animals : newAnimals = animals;

        !address ? newAddress = veterinary.address : newAddress = address;

        !avgScore ? newAvgScore = veterinary.avgScore : newAvgScore = avgScore;

        !photo ? newPhoto = veterinary.photo : newPhoto = photo;

        !description ? newDescription = veterinary.description : newDescription = description;

        !contact ? newContact = veterinary.contact : newContact = contact;

        !openAt ? newOpenAt = veterinary.openAt : newOpenAt = openAt;

        !closeAt ? newCloseAt = veterinary.closeAt : newCloseAt = closeAt;

        await Veterinary.findOneAndUpdate({ _id: id }, {
            $set: {
                "name": newName,
                "animals": newAnimals,
                "address": newAddress,
                "avgScore": newAvgScore,
                "photo": newPhoto,
                "description": newDescription,
                "contact": newContact,
                "openAt": newOpenAt,
                "closeAt": newCloseAt
            }
        }, { useFindAndModify: false });
        res.send("Modificado satisfactoriamente");
    } catch (err) {
        return res.status(422).send({ error: 'Error al modificar' });
    }
});

//Query para encontrar mis veterinarias
router.get('/myVets', async (req, res) => {
    try {
        const vets = await Veterinary.find({ idUser: req.user._id });
        res.send({ vets });
    } catch (err) {
        res.status(422).send({ error: "No se ha podido publicar el producto" });
    }
});

//Query para encontrar todas las veterinarias por nombre
router.post('/Vets', async (req, res) => {
    const { name, description, animals, initial, limit } = req.body;


    /*var inicial;
    initial == undefined ? inicial = 0 : inicial = initial;
    var limite;
    limit == undefined ? limite = 10 : limite = limit;*/

    //console.log(inicial);
    //console.log(limite);

    let newName, newAnimals, newDescription;

    if (!description && !animals) {
        if (!name) {
            newName = "";
        }
        else {
            newName = name;
        }
    }
    else {
        newName = "-1";
    }

    !animals ? newAnimals = "-1" : newAnimals = animals;

    !description ? newDescription = "-1" : newDescription = description;

    try {
        const vets = await Veterinary.find(({
            $or:
                [
                    { name: { "$regex": newName, "$options": "i" } },
                    { description: { "$regex": newDescription, "$options": "i" } },
                    { animals: newAnimals }
                ]
        })).limit(15);
        console.log("Voy a enviar solicitud")
        res.send({ vets });
        console.log("Voy a llegar solicitud")
    } catch (err) {
        res.status(422).send({ error: "No se ha podido publicar el producto" });
    }
});

//Query para encontrar todas las veterinarias por nombre
router.get('/filterVets', async (req, res) => {
    const { name, description, animals, avgScore } = req.body;
    let newName, newAnimals, newDescription, newAvgScore;

    !name ? newName = null : newName = name;

    !animals ? newAnimals = null : newAnimals = animals;

    !description ? newDescription = null : newDescription = description;

    !avgScore ? newAvgScore = -1 : newAvgScore = avgScore;
    try {
        const vets = await Veterinary.find({
            $and:
                [
                    { name: { "$regex": newName, "$options": "i" } },
                    { description: { "$regex": newDescription, "$options": "i" } },
                    //{ animals : newAnimals},
                    { avgScore: { $gte: newAvgScore } }
                ]
        });
        res.send({ vets });
    } catch (err) {
        res.status(422).send({ error: "No se ha podido publicar el producto" });
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