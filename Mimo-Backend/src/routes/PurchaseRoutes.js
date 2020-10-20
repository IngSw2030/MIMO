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
router.post('/deletePurchaseById', async (req, res) => {
	try {
		const { idPurchase } = req.body;
		const removedPurchase = await Purchase.remove({ _id: idPurchase });
		res.send({ removedPurchase });
	} catch (error) {
		console.log('Error deletePurchaseById', error);
	}
});
router.get('/mySells', async (req, res) => {
	/* 
	referencias: 
	https://stackoverflow.com/questions/35813854/how-to-join-multiple-collections-with-lookup-in-mongodb
	https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#unwind-example
	*/
	try {
		//tengo que buscar las compras que tengan productos con mi id.

		const sells = await Product.aggregate([
			//esto es un array de objetos
			//producto esta en medio de user y purchases

			{
				$lookup: {
					//join entre purchases y products llamado purchase
					from: 'purchases',
					let: { product_id: '$_id' }, //este id es del producto
					as: 'purchase',
					pipeline: [
						//operaciones adicionales sobre esta lista creada
						{
							$match: {
								$expr: {
									$and: [{ $eq: ['$$product_id', '$idProduct'] }], //el id del producto debe ser igual al id del producto en la compra
								},
							},
						},
						{
							$project: {
								idProduct: 0, // no muestro el id del producto dentro de la compra
							},
						},
						{
							$lookup: {
								//join entre esta compra y la compra
								from: 'users',
								let: { user_id: '$idUser' },
								as: 'buyer_info',
								pipeline: [
									{
										$match: {
											$expr: {
												$and: [{ $eq: ['$$user_id', '$_id'] }], //el id del usuario debe ser igual al id del usuario en la compra
											},
										},
									},
									{
										$project: {
											password: 0,
										},
									},
								],
							},
						},
					],
				},
			},
			{ $unwind: '$purchase' }, //crea un objeto por cada purchase
			/* {
			// si quisieramos hacer el join con otra tabla, aqui se podria hacer
				$lookup: {
					from: 'users',
					localField: 'idUser',
					foreignField: '_id',
					as: 'seller',
				},
			}, */
			{
				//no muestro las fotos o los pets de los productos
				$project: {
					pets: 0,
					//photo: 0,
					_id: 0,
					//idUser: 0 <- si quito esto de la project, el match de abajo no sera valido
				},
			},
			/* { //tenemos que pagar para apoder usar esto 
				$select: {
					idUser: 0,
				},
			}, */
			{
				$match: {
					$and: [{ idUser: req.user._id }], //el id del usuario en el producto debe ser igual que el id del usuario que manda el request.
				},
			},
		]);

		res.send({ sells });
	} catch (error) {
		console.log('Error mySells', error);
		res.status(422).send({ error: err });
	}
});

router.get('/myPurchases', async (req, res) => {
	const purchasesRaw = await Purchase.find({ idUser: req.user._id });
	var product;
	var retailer;
	var purchases = [];
	try {
		for (let index = 0; index < purchasesRaw.length; index++) {
			product = await Product.findById(purchasesRaw[index].idProduct);
			if (product !== null) {
				retailer = await User.findById(product.idUser);
				if (retailer === null && retailer.retailName !== null && retailer.phone !== null) {
					nombreVendedor = 'EsteMan';
					numeroVendedor = '305111111';
				} else {
					nombreVendedor = retailer.retailName;
					numeroVendedor = retailer.phone;
				}
				purchases.push({
					foto: product.photo,
					producto: product.name,
					unidades: purchasesRaw[index].amount,
					precio: product.price * purchasesRaw[index].amount,
					vendedor: nombreVendedor,
					numero: numeroVendedor,
					id: purchasesRaw[index]._id,
					status: purchasesRaw[index].status,
				});
			}
		}

		res.send({ purchases });
	} catch (err) {
		console.log('Error myPurchases', err);
		res.status(422).send({ error: 'No se han encontrado compras para este usuario' });
	}
});

router.get('/myShopingCart', async (req, res) => {
	const purchasesRaw = await Purchase.find({ idUser: req.user._id, status: 'En carrito' });
	var product;
	var retailer;
	var purchases = [];
	try {
		for (let index = 0; index < purchasesRaw.length; index++) {
			product = await Product.findById(purchasesRaw[index].idProduct);
			if (product !== null) {
				retailer = await User.findById(product.idUser);
				if (retailer === null) {
					nombreVendedor = 'EsteMan';
					numeroVendedor = '305111111';
				} else {
					nombreVendedor = retailer.retailName;
					numeroVendedor = retailer.phone;
				}
				purchases.push({
					producto: product.name,
					foto: product.photo,
					unidades: purchasesRaw[index].amount,
					precioUn: product.price,
					precio: product.price * purchasesRaw[index].amount,
					vendedor: nombreVendedor,
					numero: numeroVendedor,
					id: purchasesRaw[index]._id,
					status: purchasesRaw[index].status,
				});
			}
		}

		res.send({ purchases });
	} catch (err) {
		console.log('Error myPurchases', err);
		res.status(422).send({ error: 'No se han encontrado compras para este usuario' });
	}
});

router.post('/savePurchase', async (req, res) => {
	const { idProduct, amount } = req.body;
	var nombreVendedor;
	var numeroVendedor;

	try {
		const purchaseNew = new Purchase({
			idUser: req.user._id,
			idProduct,
			amount,
		});
		const newPurchase = await purchaseNew.save();
		const product = await Product.findById(idProduct);
		if (product !== null) {
			const retailer = await User.findById(product.idUser);
			if (retailer === null) {
				nombreVendedor = 'EsteMan';
				numeroVendedor = '305111111';
			} else {
				nombreVendedor = retailer.retailName;
				numeroVendedor = retailer.phone;
			}
			const purchase = {
				producto: product.name,
				foto: product.photo,
				unidades: amount,
				precioUn: product.price,
				precio: product.price * amount,
				vendedor: nombreVendedor,
				numero: numeroVendedor,
				id: newPurchase._id,
				status: newPurchase.status,
			};
			res.send({ purchase });
		}
	} catch (err) {
		console.log('Error savePurchase', err);
		res.status(422).send({ error: 'No se ha podido guardar la comprar' });
	}
});

router.post('/updateStatus', async (req, res) => {
	const { idPurchase, status } = req.body;
	try {
		const purchase = await Purchase.findOneAndUpdate(
			{ _id: idPurchase },
			{
				$set: {
					status: status,
				},
			}
		);
		res.send({ purchase });
	} catch (error) {
		res.status(422).send({ error: 'No se ha podido actualizar el estado de la compra' });
	}
});

router.post('/delete', async (req, res) => {
	const { idPurchase } = req.body;

	try {
		const deletedItem = await Purchase.findByIdAndDelete(idPurchase);
		res.send({ deletedItem });
	} catch (error) {
		return res.status(422).send({ error: 'Error eliminando la compra' });
	}
});

module.exports = router;
