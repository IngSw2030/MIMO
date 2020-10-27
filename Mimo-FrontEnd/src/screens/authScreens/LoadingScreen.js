import React from 'react';
import { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context as PurchaseContext } from '../../context/PurchaseContext';
import { Context as ServiceContext } from '../../context/ServiceContext';
import { Context as UserContext } from '../../context/UserContext';
import { Context as VetContext } from '../../context/VetContext';
import { Context as SellsContext } from '../../context/SellsContext';
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
	// const { getPet } = useContext(PetContext);

	function timeout(delay) {
		return new Promise(res => setTimeout(res, delay));
	}


	useEffect(() => {
		const fetchData = async () => {
			if (state.tipo === null) {

			} else {
				state.tipo == false ?
					navigation.navigate('HomePage')
					: navigation.navigate('comercHome')
			}
			getUser();
			console.log(state);
			getMyPurchases(); //Posible mejora: hacer solo una llamada de purchase y filtrar la lista aqui.
			getMySells();
			getMyShopingCart();
		}
		fetchData();
	}, [state]); // Or [] if effect doesn't need props or state

	return (
		<View>
			<Text>Pantalla de Loading</Text>
		</View>
	);
};

export default withNavigation(LoadingScreen);
