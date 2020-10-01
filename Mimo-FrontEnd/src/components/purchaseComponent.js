import React, { useContext } from 'react';
import { Context as PurchaseContext } from '../context/PurchaseContext';
import { View, Text, StyleSheet, Image } from 'react-native';

const PurchaseComponent = props => {
	const { state: purchases } = useContext(PurchaseContext);
	const purchase = purchases.find(thisPurchase => thisPurchase.id === props.id);
	return (
		<View style={styles.pageStyle}>
			<Image source={purchase.image} style={styles.imageStyle} />
			<View style={{ flexDirection: 'column' }}>
				<Text style={styles.purchaseInfo}>Producto: {purchase.name} ' ' '</Text>
				<Text style={styles.purchaseInfo}>Cantidad: {purchase.quantity}</Text>
				<Text style={styles.purchaseInfo}>Total de la compra: {purchase.totalAmount}</Text>
				<Text style={styles.purchaseInfo}>
					Fecha: {purchase.date} {''}{' '}
				</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	pageStyle: {
		backgroundColor: '#BCDB89',
		marginBottom: 10,
		flexDirection: 'row',
		borderRadius: 20,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	imageStyle: {
		height: 80,
		width: 80,
		marginBottom: 3,
		borderRadius: 360,
		alignContent: 'center',
		margin: 2,
	},
	purchaseInfo: {
		fontSize: 10,
		fontWeight: 'bold',
		marginTop: 4,
		flexWrap: 'nowrap',
		flexGrow: 1,
	},
});

export default PurchaseComponent;
