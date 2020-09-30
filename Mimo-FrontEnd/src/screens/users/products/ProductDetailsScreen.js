import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as ProductContext } from '../../../context/ProductContext';
import usePrice from '../../../hooks/usePrice';

const ProductDetailsScreen = ({ navigation }) => {
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
				<Text>Cantidad</Text>
				<Text>Comprar</Text>
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
		justifyContent: 'space-around',
		alignSelf: 'stretch',
		minWidth: Dimensions.get('window').width,
		flexGrow: 1,
		flexShrink: 0,
		flexDirection: 'row',
	},
});

export default withNavigation(ProductDetailsScreen);
