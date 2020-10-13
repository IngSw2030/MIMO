import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import useProductName from '../hooks/useProductName';
import usePrice from '../hooks/usePrice';
import { Context as ProductContext } from '../context/ProductContext';
const ProductComponent = props => {
	//tener en cuenta que cuando viene desde la FlatList de productList
	//console.log(props.x) da la lista de todos los productComponent, no solo de "este" ProductComponent
	const { state: productList } = useContext(ProductContext);
	const product = productList.find(thisProduct => thisProduct.id === props.id);
	const allowedTextSize = 15;
	const name = useProductName(product.name, allowedTextSize);
	const price = usePrice(product.price);
	return (
		<View style={styles.viewStyle}>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() =>
					props.navigation.navigate('ProductDetails', {
						id: props.id,
					})
				}
			>
				<Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${product.image}` }} />
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
		backgroundColor: '#7E9FD1',
		borderRadius: 20,
		margin: 5,
		minHeight: 120,
		maxWidth: 120,
	},
	imageStyle: {
		height: 90,
		width: 70,
		alignSelf: 'center',
		marginTop: 5,
	},
	nameStyle: {
		fontWeight: 'bold',
		marginLeft: 5,
	},
	priceStyle: {
		alignSelf: 'center',
	},
	viewStyle: {
		flex: 1,
	},
});

export default withNavigation(ProductComponent);
