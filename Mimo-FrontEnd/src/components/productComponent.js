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
	return (
		<View style={styles.viewStyle}>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() =>
					navigate(pantalla, {
						product: product,
					})
				}
			>
				<Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${product.photo}` }} />
				<Text style={styles.nameStyle}>{name}</Text>
				<Text style={styles.priceStyle}>{price}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFA1A9',
		borderRadius: 20,
		margin: 5,
	},
	imageStyle: {
		height: 90,
		width: 90,
		alignSelf: 'center',
		marginTop: 5,
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
		width: 140
	},
});

export default withNavigation(ProductComponent);
