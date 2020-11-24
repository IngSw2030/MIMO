import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Context as PurchaseContext } from '../../context/PurchaseContext';
import { Context as ServiceContext } from '../../context/ServiceContext';
import { Context as UserContext } from '../../context/UserContext';
import { Context as VetContext } from '../../context/VetContext';
import { Context as SellsContext } from '../../context/SellsContext';
import { Context as ProductContext } from '../../context/ProductContext';
import { Context as ShoppingCartContext } from '../../context/ShoppingCartContext';
import { useEffect } from 'react';
import { navigate } from '../../navigationRef';
import { withNavigation } from 'react-navigation';




const LoadingScreen = ({ navigation }) => {
	// const { getPosts } = useContext(PostContext);
	const { getMyPurchases } = useContext(PurchaseContext);
	const { getMySells } = useContext(SellsContext);
	const { state, getUser } = useContext(UserContext);
	const { getMyShopingCart } = useContext(ShoppingCartContext);
	const { getAllVets } = useContext(VetContext);
	const { getProduct } = useContext(ProductContext);

	const mimo = require('../../../assets/mimo.png')

	// const { getPet } = useContext(PetContext);

	useEffect(() => {
		const fetchData = async () => {
			if (state.tipo === null) {
				getUser();
				getAllVets({ name: "" });
				getProduct({ name: "", pets: '' });
				getMyPurchases(); //Posible mejora: hacer solo una llamada de purchase y filtrar la lista aqui.
				getMySells();
				getMyShopingCart();
			} else {
				state.tipo == false ?
					navigation.navigate('HomePage')
					: navigation.navigate('comercHome')
			}

		}
		fetchData();
	}, [state]); // Or [] if effect doesn't need props or state

	return (
		<View style={styles.general}>
			<View style={{
				flex: 1, alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Image style={styles.image} source={mimo} />
			</View>
			<Text style={styles.texto}>Zorah Inc 2020</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	general: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF7BB',

	},
	image: {
		height: 250,
		width: 250,
	},
	texto: {
		textAlign: 'center',
		fontSize: 20
	}
});

export default withNavigation(LoadingScreen);
