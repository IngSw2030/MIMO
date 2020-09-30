import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductComponent from './productComponent';
import { Context as ProductContext } from '../context/ProductContext';
const ProductList = ({ navigation }) => {
	const { state: productos } = useContext(ProductContext);
	//Lista Inicial de productos se encuentra en ProductContext
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={productos}
				keyExtractor={item => item.id}
				numColumns={3}
				renderItem={({ item }) => {
					return <ProductComponent id={item.id} />;
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({});

export default withNavigation(ProductList);
