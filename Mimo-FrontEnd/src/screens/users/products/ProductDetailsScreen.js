import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TextInputBase } from 'react-native';
import { withNavigation } from 'react-navigation';
import usePrice from '../../../hooks/usePrice';
import { Context as PurchaseContext } from '../../../context/PurchaseContext';
import ShoppingCartScreen from './ShoppingCartScreen';
import { Context as ShoppingCartContext } from '../../../context/ShoppingCartContext';

const ProductDetailsScreen = ({ navigation }) => {
	const [quantity, setQuantity] = useState(1);
	const [totalAmount, setTotalAmount] = useState(0);
	const { savePurchase } = useContext(PurchaseContext);
	const product = navigation.getParam('product');
	const price = usePrice(product.price);
	const { saveProduct } = useContext(ShoppingCartContext);

	useEffect(() => {
		setTotalAmount(() => quantity * product.price);
		setTotalAmount(totalAmount => usePrice(totalAmount));
	}, [quantity]);
	return (
		<View style={styles.pageStyle}>
			<View style={styles.productAttrStyle}>
				<Image style={styles.imageStyle} source={product.image} />
				<Text style={styles.titleStyle}>{product.name}</Text>
				<View style={styles.descriptionViewStyle}>
					<Text style={styles.descriptionStyle}>Descripcion del producto: </Text>
					<Text style={styles.descriptionStyle}>{product.description}</Text>
					<Text>Precio por unidad: {price}</Text>
				</View>
			</View>

			<View style={styles.purchaseStyle}>
				<Text>{totalAmount}</Text>
				<Button style={styles.buttonStyle} title='   +   ' onPress={() => setQuantity(quantity + 1)} />
				<Text>{quantity}</Text>
				<Button
					style={styles.buttonStyle}
					title='   -   '
					onPress={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
				/>
				<Button
					title='Comprar'
					onPress={() => {
						saveProduct({ product, quantity });
						navigation.navigate('ShoppingCart');
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	pageStyle: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#EDDF98',
		justifyContent: 'space-between',
	},
	titleStyle: {
		fontSize: 18,
		alignSelf: 'center',
	},
	buttonStyle: {},
	productAttrStyle: {
		flexShrink: 3,
		alignItems: 'flex-start',
		flexDirection: 'column',
	},
	imageStyle: {
		resizeMode: 'contain',
		maxWidth: Dimensions.get('window').width,
		flexShrink: 2,
	},
	descriptionStyle: {
		fontWeight: 'bold',
		flexWrap: 'wrap',
	},
	descriptionViewStyle: {
		justifyContent: 'space-around',
		alignSelf: 'stretch',
	},
	purchaseStyle: {
		flexGrow: 2,
		alignItems: 'flex-end',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});

export default withNavigation(ProductDetailsScreen);
