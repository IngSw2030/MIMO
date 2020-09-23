const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Message = mongoose.model('Message');
//User === all users
const router = express.Router();
router.use(requireAuth);

router.post('/save', async (req, res) => {
    const {
        content,
        idUserRecieve
    } = req.body;

    try {
        const message = new Message({
            content,
            idUserRecieve,
            idUserSend: req.user._id,
        });
        await message.save();
        res.send({ message });
    } catch (err) {
        res.status(422).send({ error: "No se ha podido guardar la mascota" });
    }
});

//Query para encontrar mis mascotas
router.get('/chat', async (req, res) => {
    const {idUserRecieve}
    try {
        const messages = await Message.find({$and:[
            {idUserRecieve: idUserRecieve}, 
            {idUserSend:req.user._id}
        ]});
        res.send({ messages });
    } catch (err) {
        res.status(422).send({ error: "No se ha podido publicar el producto" });
    }
});

module.exports = router;