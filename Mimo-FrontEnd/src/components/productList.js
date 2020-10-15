import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductComponent from './productComponent';
import { Context as ProductContext } from '../context/ProductContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useSearch from '../hooks/useResultsProduct';
import SearchBar from '../components/searchBar';
const ProductList = () => {
	const [term, setTerm] = useState('');
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
	const [searchApi, results, accesories, food, cleaning, others, errorMessage] = useSearch();

	//Lista Inicial de productos se encuentra en ProductContext
	return (
		<View style={styles.pageStyle}>
			<SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => searchApi(term)} />
			<Text style={styles.titleStyle}>Lista De Productos</Text>
			<View style={styles.iconListStyle}>
				<FlatList
					data={buttons}
					keyExtractor={item => item.type + item.color}
					horizontal={true}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								style={styles.selectType}
								onPress={() => {
									searchApi('', item.type);
								}}
							>
								<MaterialCommunityIcons name={item.name} size={item.size} color={item.color} />
							</TouchableOpacity>
						);
					}}
				/>
			</View>
			<View style={styles.productListStyle}>
				<FlatList
					data={results}
					keyExtractor={item => item._id}
					numColumns={3}
					renderItem={({ item }) => {
						return <ProductComponent product={item} />;
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
