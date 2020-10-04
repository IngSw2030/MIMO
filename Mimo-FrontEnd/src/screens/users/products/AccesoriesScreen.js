import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductList from '../../../components/productList';
const AccesoriesScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, backgroundColor: '#FFF7BB', justifyContent: 'center', alignItems: 'stretch' }}>
			<Text>Pantalla de AccesoriesScreen</Text>
			<ProductList />
		</View>
	);
};
const Styles = StyleSheet.create({});
export default withNavigation(AccesoriesScreen);
