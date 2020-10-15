const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Purchase = mongoose.model('Purchase');
const Product = mongoose.model('Product');
const User = mongoose.model('User');

const router = express.Router();

router.use(requireAuth);

router.post('/save', async (req, res) => {
	const { idProduct } = req.body;

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
	const purchases = await Purchase.find({ idUser: req.user._id });
	var product;
	var retailer;
	try {
		for (let index = 0; index < purchases.length; index++) {
			product = await Product.findById(purchases[index].idProduct);
			retailer = await User.findById(product.idUser);
			if (retailer === null) {
				nombreVendedor = 'EsteMan';
				numeroVendedor = '305111111';
			} else {
				nombreVendedor = retailer.retailName;
				numeroVendedor = retailer.phone;
			}
			purchases[index] = {
				producto: product.name,
				foto: product.foto,
				unidades: purchases[index].amount,
				precioUn: product.price,
				precio: product.price * purchases[index].amount,
				vendedor: nombreVendedor,
				numero: numeroVendedor,
				id: purchases[index]._id,
				status: purchases[index].status,
			};
		}

		res.send({ purchases });
	} catch (err) {
		console.log('Error myPurchases', err);
		res.status(422).send({ error: 'No se han encontrado compras para este usuario' });
	}
});

router.get('/myShopingCart', async (req, res) => {
	const purchases = await Purchase.find({ idUser: req.user._id, status: 'En carrito' });
	var product;
	var retailer;
	try {
		for (let index = 0; index < purchases.length; index++) {
			product = await Product.findById(purchases[index].idProduct);
			retailer = await User.findById(product.idUser);
			if (retailer === null) {
				nombreVendedor = 'EsteMan';
				numeroVendedor = '305111111';
			} else {
				nombreVendedor = retailer.retailName;
				numeroVendedor = retailer.phone;
			}
			purchases[index] = {
				producto: product.name,
				foto: product.foto,
				unidades: purchases[index].amount,
				precioUn: product.price,
				precio: product.price * purchases[index].amount,
				vendedor: nombreVendedor,
				numero: numeroVendedor,
				id: purchases[index]._id,
				status: purchases[index].status,
			};
		}

		res.send({ purchases });
	} catch (err) {
		console.log('Error myPurchases', err);
		res.status(422).send({ error: 'No se han encontrado compras para este usuario' });
	}
});

router.post('/savePurchase', async (req, res) => {
	const { idProduct, amount } = req.body;

	try {
		const purchase = new Purchase({
			idUser: req.user._id,
			idProduct,
			amount,
		});
		await purchase.save();
		res.send({ purchase });
	} catch (err) {
		console.log('Error savePurchase', err);
		res.status(422).send({ error: 'No se ha podido guardar la comprar' });
	}
});

router.post('/updateStatus', async (req, res) => {
	const { idPurchase, status } = req.body;
	console.log({idPurchase, status})
	try {
		await Purchase.findOneAndUpdate(
			{ _id: idPurchase },
			{
				$set: {
					status: status,
				},
			}
		);
		res.send('Modificado satisfactoriamente')
	} catch (error) {
		res.status(422).send({ error: 'No se ha podido actualizar el estado de la compra' });
	}
});

router.post('/delete', async (req, res) => {
	const { idPurchase } = req.body;

	try {
		await Purchase.findByIdAndDelete(idPurchase);
		res.send('Compra borrada satisfactoriamente');
	} catch (error) {
		return res.status(422).send({ error: 'Error eliminando la compra' });
	}
});

module.exports = router;
