const express = require('express');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const router = express.Router();

router.post('/save', async (req, res) => {
    const {
        email,
        name,
        password,
        phone,
        userType,
    } = req.body;

    try {
        const user = new User({
            email,
            name,
            password,
            phone,
            userType,
        });
        await user.save();
        res.send({ user });
    } catch (err) {
        res.status(422).send({ error: "No se ha podido publicar el producto" });
    }
});

module.exports = router;