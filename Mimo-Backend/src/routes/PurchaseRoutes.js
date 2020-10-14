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

//Query para encontrar mis mascotas
router.get('/myPurchases', async (req, res) => {
    try {
        const purchases = await Purchase.find({idUser: req.user._id});
        res.send({ purchases });
    } catch (err) {
        res.status(422).send({ error: "No se han encontrado compras para este usuario" });
    }
});

router.post('/savePurchase', async (req, res) => {
    const {idProduct, idRetailer, amount} = req.body;

    try {

        const purchase = new Purchase({
            idUser: req.user._id,
            idRetailer,
            idProduct,
            amount,
            datePurchased: Date.now,
            status: 'Por Completar'
        });
        await purchase.save();
        res.send({ purchase });
    } catch (err) {
        res.status(422).send({ error: "No se ha podido guardar la comprar" });
    }
});

router.post('/updateStatus', async (req, res) => {
    const {idPurchase, status} = req.body;

    try {
        await Purchase.findOneAndUpdate({_id: idPurchase}, {
            $set: {
                'status': status
            }
        })
        
    } catch (error) {
        res.status(422).send({ error: "No se ha podido actualizar el estado de la compra" });
    }
});


module.exports = router;