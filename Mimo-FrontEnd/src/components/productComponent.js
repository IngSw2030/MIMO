import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import useProductName from '../hooks/useProductName';
import usePrice from '../hooks/usePrice';
import { navigate } from '../navigationRef';
import { Context as ProductContext } from '../context/ProductContext';




const ProductComponent = props => {

	const product = props.product;
	const allowedTextSize = 15;
	const name = useProductName(product.name, allowedTextSize);
	const price = usePrice(product.price);
	const pantalla = props.pantalla;

	var color;
	product.category == 'accesorio' ?
		color = '#B8DC7D'
		: product.category == 'comida' ?
			color = '#E8916C'
			: product.category == 'limpieza' ?
				color = '#FFC635'
				: color = '#B0EFEF'
	return (
		<View style={styles.viewStyle}>
			<TouchableOpacity
				style={[styles.buttonStyle, { backgroundColor: color }]}
				onPress={() =>
					navigate(pantalla, {
						product: product,
					})
				}
			>
				<Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${product.photo}` }} />
				<Text style={styles.nameStyle}>{name} {' '}</Text>
				<Text style={styles.priceStyle}>{price}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		flex: 1,
		flexDirection: 'column',
		borderRadius: 30,
		margin: 6,
	},
	imageStyle: {
		height: 105,
		width: 105,
		alignSelf: 'center',
		marginTop: 10,
		borderRadius: 25
	},
	nameStyle: {
		fontWeight: 'bold',
		marginLeft: 5,
		alignSelf: 'center'
	},
	priceStyle: {
		alignSelf: 'center',
	},
	viewStyle: {
		flex: 1,
		width: 170,
		height: 170
	},
});

export default withNavigation(ProductComponent);
