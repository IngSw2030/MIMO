import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductComponent from './productComponent';

const ProductList = props => {
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={props.productos}
				keyExtractor={item => item.id}
				numColumns={3}
				renderItem={({ item }) => {
					return (
						<ProductComponent
							nombre={item.nombre}
							precio={item.precio}
							descripcion={item.descripcion}
							image={item.image}
						/>
					);
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({});

export default withNavigation(ProductList);
