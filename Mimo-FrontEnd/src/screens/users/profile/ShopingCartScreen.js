import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Button } from 'react-native';
import { Context as PurchaseContext } from '../../../context/PurchaseContext';
import usePrice from '../../../hooks/usePrice';
import { Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { navigate } from '../../../navigationRef';

const pagar = function (purchases) {
	let acum = 0;
	if (!purchases) {
		return acum;
	}
	for (var i = 0; i < purchases.length; i++) {
		acum += purchases[i].precioUn * purchases[i].unidades;
	}

	return acum;
};
const MassagesScreen = ({ navigation }) => {
	const { state: purchases, getMyShopingCart, deletePurchase, updateStatus } = useContext(PurchaseContext);
	useEffect(() => {
		getMyShopingCart();
	}, []);

	const comprarPurchases = function () {
		purchases.forEach(element => {
			updateStatus({ idPurchase: element.id, status: 'Pendiente' });
		});
	};

	const [quantity, setQuantity] = useState(1);

	const bPagar = pagar(purchases);
	const [aPagar, setAPagar] = useState(bPagar);

	const mimoIcon = require('../../../../assets/mimo.png');

	return (
		<View style={styles.generalViewStyle}>
			<Text style={styles.titleStyle}>Carrito de Compras ''</Text>
			<View style={styles.purchasesListStyle}>
				<FlatList
					keyExtractor={purchases => purchases.id}
					data={purchases}
					renderItem={({ item }) => {
						return (
							<View style={styles.containerPurchase}>
								<View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
									{item.foto ? (
										<Image
											style={styles.image}
											source={{ uri: `data:image/gif;base64,${item.foto}` }}
										/>
									) : (
											<Image style={styles.image} source={mimoIcon} />
										)}
								</View>
								<View style={styles.containerPurchaseAmount}>
									<View style={styles.deleteStyle}>
										<TouchableOpacity
											onPress={async () => {
												try {
													await deletePurchase({ idPurchase: item.id });
													purchases.delete
													await getMyShopingCart();
												} catch (error) {
													console.log(error);
												}
											}}
										>
											<Feather name='x-circle' size={24} color='black' />
										</TouchableOpacity>
									</View>
									<View style={styles.container}>
										<View style={styles.detailStyle}>
											<Text style={styles.info}>Producto: </Text>
											<Text style={styles.infoSoft}>{item.producto}</Text>
										</View>
										<View style={styles.detailStyle}>
											<Text style={styles.info}>Precio: </Text>
											<Text style={styles.infoSoft}>{usePrice(item.precioUn)}</Text>
										</View>
										<View style={styles.detailStyle}>
											<Text style={styles.info}>Vendedor: </Text>
											<Text style={styles.infoSoft}>{item.vendedor}</Text>
										</View>
									</View>
									<View style={styles.amountStyle}>
										<TouchableOpacity onPress={() => {
											setQuantity(quantity > 1 ? quantity - 1 : quantity)
											setAPagar(aPagar - item.precioUn)
										}}>
											<Feather name='minus' size={35} color='black' />
										</TouchableOpacity>
										{quantity === 1 ? (
											<Text style={{ fontSize: 30 }}> {item.unidades} </Text>
										) : (
												<Text style={{ fontSize: 30 }}> {quantity} </Text>
											)}
										<TouchableOpacity onPress={() => {
											setQuantity(quantity < 15 ? quantity + 1 : quantity)
											setAPagar(aPagar + item.precioUn)
										}}>
											<Feather name='plus' size={35} color='black' />
										</TouchableOpacity>
									</View>
								</View>
							</View>
						);
					}}
				/>
			</View>
			<View style={styles.priceComplete}>
				<View style={styles.roundedContainerStyleTotal}>
					<Text style={styles.totalStyle}>Total:</Text>
					<Text style={styles.totalStyleSoft}>{usePrice(aPagar)}</Text>
				</View>
			</View>

			<View style={styles.cancelConfirm}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<View style={styles.roundedContainerStyleCa}>
						<Text style={styles.totalStyle}>Cancelar ''</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={async () => {
						navigation.navigate('HistoryScreen');
						await comprarPurchases();
						await getMyShopingCart();
					}}
				>
					<View style={styles.roundedContainerStyleCo}>
						<Text style={styles.totalStyle}>Comprar ''</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	generalViewStyle: {
		flex: 1,
		backgroundColor: '#FFF7BB',
	},
	titleStyle: {
		marginTop: 20,
		marginBottom: 30,
		fontSize: 34,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	purchasesListStyle: {
		alignSelf: 'center',
		height: '60%',
	},
	containerPurchase: {
		height: 150,
		width: 330,
		backgroundColor: '#FFA1A9',
		marginBottom: 10,
		flexDirection: 'row',
		borderRadius: 25,
		justifyContent: 'space-between',
	},
	info: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	image: {
		height: 90,
		width: 90,
		marginLeft: 2,
		marginBottom: 2,
		borderRadius: 50,
	},
	container: {
		height: 60,
		width: 250,
		alignSelf: 'center',
	},
	detailStyle: {
		flexDirection: 'row',
	},
	infoSoft: {
		fontSize: 14,
	},
	deleteStyle: {
		marginTop: 12,
		marginRight: 12,
		alignItems: 'flex-end',
	},
	containerPurchaseAmount: {
		width: 220,
		flexDirection: 'column',
	},
	amountStyle: {
		flexDirection: 'row',
		marginLeft: 20,
	},

	priceComplete: {
		alignSelf: 'center',
	},
	roundedContainerStyleTotal: {
		marginTop: 15,
		marginLeft: 15,
		backgroundColor: '#B0EFEF',
		height: 50,
		width: 250,
		borderRadius: 75,
		justifyContent: 'center',
	},
	roundedContainerStyleCo: {
		backgroundColor: '#98E568',
		marginTop: 15,
		marginHorizontal: 10,
		height: 50,
		width: 150,
		borderRadius: 75,
		justifyContent: 'center',
	},
	roundedContainerStyleCa: {
		marginTop: 15,
		marginHorizontal: 10,
		backgroundColor: '#E8778B',
		height: 50,
		width: 150,
		borderRadius: 75,
		justifyContent: 'center',
	},
	totalStyle: {
		alignSelf: 'center',
		fontSize: 24,
		fontWeight: 'bold',
	},
	cancelConfirm: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	totalStyleSoft: {
		alignSelf: 'center',
		fontSize: 20,
	},
});

export default withNavigation(MassagesScreen);
