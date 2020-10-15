import React, { useState } from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as ShoppingCartContext } from '../../../context/ShoppingCartContext';
const ShoppingCartScreen = ({ navigation }) => {
	const { state: shoppingCart } = useContext(ShoppingCartContext);
	console.log(shoppingCart);
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo

	const mimoIcon = require('../../../../assets/mimo.png');

	return (
		<View style={{ flex: 1, backgroundColor: '#FCF4CB', justifyContent: 'flex-start', alignItems: 'stretch' }}>
			<Text style={styles.title}>Carrito de compras</Text>
			<View style={styles.listStyle}>
				<FlatList
					keyExtractor={item => item._id + item.quantity}
					data={shoppingCart}
					renderItem={({ item }) => {
						return (
							<View style={styles.containerPhoto}>
								<View>
									<Image style={styles.image} source={mimoIcon} />
								</View>
								<View style={styles.container}>
									<Text style={styles.info}>Producto: {item.name}</Text>
									<Text style={styles.info}>Precio: {item.price}</Text>
									<Text style={styles.info}>Cantidad: {item.quantity}</Text>
									<Text style={styles.info}>Descripcion: {item.description}</Text>
								</View>
							</View>
						);
					}}
				/>
			</View>
			<View></View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		marginTop: '20%',
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	listStyle: {
		justifyContent: 'center',
		//  flexDirection: 'row',
		flexWrap: 'wrap',
		//marginTop: '5%',
		//marginBottom: '3%',
		marginHorizontal: '5%',
		height: '50%',
	},
	image: {
		height: '80%',
		width: 80,
		marginBottom: '3%',
		borderRadius: 360,
		alignContent: 'center',
		margin: 2,
	},
	info: {
		fontSize: 10,
		fontWeight: 'bold',
		marginTop: 4,
		width: 150,
	},
	containerPhoto: {
		height: 100,
		width: 300,
		backgroundColor: '#FFA1A9',
		marginBottom: 10,
		flexDirection: 'row',
		borderRadius: 20,
		alignSelf: 'center',
		marginHorizontal: '9%',

		//justifyContent:'space-between'
	},
	text: {
		marginTop: '0%',
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: '3%',
	},
	container: {
		height: 75,
		width: 100,
		backgroundColor: '#FFA1A9',
		marginBottom: 5,
	},
});

export default withNavigation(ShoppingCartScreen);
