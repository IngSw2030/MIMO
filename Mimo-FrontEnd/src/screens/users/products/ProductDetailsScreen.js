import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as ProductContext } from '../../../context/ProductContext';
import usePrice from '../../../hooks/usePrice';

const ProductDetailsScreen = ({ navigation }) => {
	const [quantity, setQuantity] = useState(0);
	const { state: productList } = useContext(ProductContext);
	const product = productList.find(thisProduct => thisProduct.id === navigation.getParam('id'));
	const price = usePrice(product.price);

	return (
		<View style={styles.pageStyle}>
			<View style={styles.productAttrStyle}>
				<Image style={styles.imageStyle} source={product.image} />
				<Text style={styles.titleStyle}>{product.name}</Text>
				<View style={styles.descriptionViewStyle}>
					<Text style={styles.descriptionStyle}>Descripcion del producto: </Text>
					<Text style={styles.descriptionStyle}>{product.description}</Text>
				</View>
			</View>

			<View style={styles.purchaseStyle}>
				<Text>{price}</Text>
				<Button style={styles.buttonStyle} title='   +   ' onPress={() => setQuantity(quantity + 1)} />
				<Text>{quantity}</Text>
				<Button
					style={styles.buttonStyle}
					title='   -   '
					onPress={() => setQuantity(quantity >= 1 ? quantity - 1 : quantity)}
				/>
				<Button
					title='Comprar'
					onPress={() =>
						alert(
							'Esta funcionalidad no esta terminada. Por favor considere donar por Paypal a zorahcorp@gmail.com para apoyarnos'
						)
					}
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
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});

export default withNavigation(ProductDetailsScreen);
