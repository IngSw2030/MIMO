const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Purchase = mongoose.model('Purchase');

const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
    const {
        idProduct
    } = req.body;

    try {
        const purchase = new Purchase({
            idProduct,
            idUser: req.user._id,
        });

        await purchase.save();
        res.send({ purchase });
    } catch (err) {
        res.status(422).send({ error: err });
    }
});

module.exports = router;