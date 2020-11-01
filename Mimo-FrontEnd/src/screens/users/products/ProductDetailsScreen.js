import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import usePrice from '../../../hooks/usePrice';
import { Context as ShoppingCartContext } from '../../../context/ShoppingCartContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ProductDetailsScreen = ({ navigation }) => {
	const [quantity, setQuantity] = useState(1);
	const [totalAmount, setTotalAmount] = useState(0);
	const { state: cart, addToCart } = useContext(ShoppingCartContext);
	const product = navigation.getParam('product');
	const price = usePrice(product.price);

	useEffect(() => {
		setTotalAmount(() => quantity * product.price);
		setTotalAmount(totalAmount => usePrice(totalAmount));
	}, [quantity]);
	return (
		<View style={styles.pageStyle}>
			<ScrollView style={styles.scroll}>
				<View style={{}}>
					<Image style={styles.imageStyle} source={{ uri: `data:image/gif;base64,${product.photo}` }} />
					<Text style={styles.titleStyle}>{product.name}</Text>
					<View style={styles.descriptionViewStyle}>
						<Text style={styles.descriptionStyle}>{price} C/U</Text>
						<Text style={styles.descriptionStyle}>Descripcion </Text>
						<Text style={styles.textoNomal}>{product.description} </Text>
					</View>
				</View>

				<View style={styles.cantidadGeneral}>
					<TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>
						<Entypo name='minus' size={36} color='black' />
					</TouchableOpacity>
					<Text style={styles.cantidad}>{quantity}</Text>

					<TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
						<Entypo name='plus' size={36} color='black' />
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.botonCarrito}
						onPress={async () => {
							try {
								alert('Agregado al carrito con exito');
								await addToCart({ idProduct: product._id, amount: quantity });
								navigation.navigate('ShopingCart');
							} catch (error) {
								console.log('Error en addToCart del ProductDetailScreen', error);
							}
						}}
					>
						<FontAwesome5 name='shopping-cart' size={40} color='black' />
						<Text style={{ fontSize: 24 }}>Agregar al carrito</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
	},

	cantidadGeneral: {
		flexDirection: 'row',
	},
	cantidad: {
		fontSize: 36,
		fontWeight: 'bold',
		marginHorizontal: 30,
	},
	botonCarrito: {
		backgroundColor: '#E8916C',
		borderRadius: 25,
		padding: 8,
		flexDirection: 'row',
	},
	textoNomal: {
		fontSize: 20,
	},
	pageStyle: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#EDDF98',
	},
	titleStyle: {
		fontSize: 30,
		alignSelf: 'center',
	},
	productAttrStyle: {
		flex: 1,
		flexDirection: 'column',
	},
	imageStyle: {
		marginTop: 50,
		height: 350,
		width: 350,
		alignSelf: 'center',
		borderRadius: 25,
	},
	descriptionStyle: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	descriptionViewStyle: {
		minHeight: 200,
	},
});

export default withNavigation(ProductDetailsScreen);
