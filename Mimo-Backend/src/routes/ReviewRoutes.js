const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Review = mongoose.model('Review');

const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
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

//Query para encontrar mis mascotas
router.get('/vetsReview', async (req, res) => {
    const { idVet } = req.body
    try {
        const reviews = await Review.find({idVet: idVet});
        res.send({ reviews });
    } catch (err) {
        res.status(422).send({ error: "No se ha podido publicar el producto" });
    }
});

module.exports = router;