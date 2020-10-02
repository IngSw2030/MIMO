const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');
//User === all users
const router = express.Router();

//signup
router.post('/signup', async (req, res) => {
    const { email, name, password, retailName, userType } = req.body;

    try {
        
        const user = new User({ email, name, password, retailName, userType });
        await user.save();

        const token = jwt.sign({ userId: user._id }, 'merlinylisa');
        res.send({ token });
        res.send('Ha realizado un signUp');
    } catch (err) {
        //return res.status(422).send({ error: 'No se ha podido realizar el sign up' });
    }
});

//signin
router.post('/signin', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'Debe ingresar correo de usuario y contraseña' });
    }

    const user = await User.findOne({ email })

    if (!user) {
        res.status(422).send({ error: 'Email o contraseña no validos' })
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, 'merlinylisa');
        res.send({ token });
    } catch (err) {
        res.status(422).send({ error: 'Email o contraseña no validos' })
    }
});


module.exports = router;

