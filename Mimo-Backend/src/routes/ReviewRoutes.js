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

module.exports = router;