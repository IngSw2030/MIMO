const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Review = mongoose.model('Review');

const router = express.Router();

router.use(requireAuth);

//Guardar un review 
router.post('/saveVetReview', async (req, res) => {
    const {
        score,
        comment,
        idVet,
    } = req.body;

    try {
        const review = new Review({
            score,
            comment,
            idVet,
            idUser: req.user._id,
        });
        await review.save();
        res.send({ review });
    } catch (err) {
        res.status(422).send({ error: err });
    }
});

//Guardar un review de un servicio
router.post('/saveServiceReview', async (req, res) => {
    const {
        score,
        comment,
        idService,
    } = req.body;

    try {
        const review = new Review({
            score,
            comment,
            idService,
            idUser: req.user._id,
        });
        await review.save();
        res.send({ review });
    } catch (err) {
        res.status(422).send({ error: err });
    }
});

//Encontrar las reviews relacionadas con una veterinaria
router.post('/vetReviews', async (req, res) => {
    const { idVet } = req.body
    console.log(idVet);
    try {
        const reviews = await Review.find({ idVet: idVet }).populate('idVet').populate('idUser');
        res.send({ reviews });
    } catch (err) {
        res.status(422).send({ error: "Error al buscar los reviews" });
    }
});

//Encontrar las reviews relacionadas con un servicio
router.post('/ServiceReviews', async (req, res) => {
    const { idService } = req.body
    try {
        const reviews = await Review.find({ idService: idService }).populate('idService').populate('idUser');
        res.send({ reviews });
    } catch (err) {
        res.status(422).send({ error: "Error al buscar los reviews" });
    }
});

module.exports = router;