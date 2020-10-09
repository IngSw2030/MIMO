import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductComponent from './productComponent';
import { Context as ProductContext } from '../context/ProductContext';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
const ProductList = ({ navigation }) => {
	const { state: productos } = useContext(ProductContext);
	const [type, setType] = useState('');
	const buttons = [
		{ name: 'dog', size: 50, color: 'black', type: 'perro' },
		{ name: 'cat', size: 50, color: 'black', type: 'gato' },
		{ name: 'fish', size: 50, color: 'black', type: 'pez' },
		{ name: 'rabbit', size: 50, color: 'black', type: 'conejo' },
		{ name: 'dog', size: 50, color: 'red', type: 'perro' },
		{ name: 'cat', size: 50, color: 'red', type: 'gato' },
		{ name: 'fish', size: 50, color: 'red', type: 'pez' },
		{ name: 'rabbit', size: 50, color: 'red', type: 'conejo' },
		{ name: 'dog', size: 50, color: 'blue', type: 'perro' },
		{ name: 'cat', size: 50, color: 'blue', type: 'gato' },
		{ name: 'fish', size: 50, color: 'blue', type: 'pez' },
		{ name: 'rabbit', size: 50, color: 'blue', type: 'conejo' },
	];

	//Lista Inicial de productos se encuentra en ProductContext
	return (
		<View style={styles.pageStyle}>
			<Text style={styles.titleStyle}>Lista De Productos {'  '}</Text>
			<View style={styles.iconListStyle}>
				<FlatList
					data={buttons}
					keyExtractor={item => item.type + item.color}
					horizontal={true}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity style={styles.selectType} onPress={() => setType(item.type)}>
								<MaterialCommunityIcons name={item.name} size={item.size} color={item.color} />
							</TouchableOpacity>
						);
					}}
				/>
			</View>
			<View style={styles.productListStyle}>
				<FlatList
					data={productos}
					keyExtractor={item => item.id}
					numColumns={3}
					renderItem={({ item }) => {
						return <ProductComponent id={item.id} />;
					}}
				/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		marginTop: 50,
		alignSelf: 'center',
	},
	iconListStyle: {
		padding: 10,
		margin: 10,
	},
	productListStyle: {
		marginTop: 20,
	},
	pageStyle: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	selectType: {
		alignSelf: 'center',
		flexDirection: 'row',
	},
});

export default withNavigation(ProductList);
