import React, { useState, useContext } from 'react';
import { Context as PurchaseContext } from '../context/PurchaseContext';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	Image,
	SafeAreaView,
	ScrollView,
	StatusBar,
} from 'react-native';

const PurchaseComponent = props => {
	const { state: purchases } = useContext(PurchaseContext);
	const purchase = purchases.find(thisPurchase => thisPurchase.id === props.id);
	console.log(purchase);
	return (
		<View style={styles.containerPhoto}>
			<Image source={purchase.image} style={styles.image} />
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
	title: {
		marginTop: 70,
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 20,
	},
	textButtons: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		//backgroundColor: '#DBAB9C'
	},
	generalView: {
		height: 350,
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: 20,
		alignSelf: 'center',
	},
	petButtons: {
		backgroundColor: 'rgba(159, 202, 226, 0.81)',
		borderRadius: 25,
		height: 40,
		width: 300,
		margin: 15,
	},
	container: {
		height: 75,
		width: 100,
		backgroundColor: '#BCDB89',
		marginBottom: 5,
		marginLeft: 15,
	},
	containerPhoto: {
		backgroundColor: '#BCDB89',
		marginBottom: 10,
		flexDirection: 'row',
		borderRadius: 20,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	image: {
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
