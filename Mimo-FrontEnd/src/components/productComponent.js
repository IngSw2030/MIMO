import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import useProductName from '../hooks/useProductName';
import usePrice from '../hooks/usePrice';

const ProductComponent = props => {
	const allowedTextSize = 15;
	const name = useProductName(props.nombre, allowedTextSize);
	const price = usePrice(props.precio);
	return (
		<View style={styles.viewStyle}>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() =>
					props.navigation.navigate('ProductDetails', {
						image: props.image,
						name: props.nombre,
						description: props.description,
						price: props.precio,
					})
				}
			>
				<Image style={styles.imageStyle} source={props.image} />
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
		backgroundColor: '#E8916C',
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
