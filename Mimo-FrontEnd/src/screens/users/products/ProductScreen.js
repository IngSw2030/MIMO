import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductComponent from '../../../components/productComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useSearch from '../../../hooks/useResultsProduct';
import SearchBar from '../../../components/searchBar';
const mimoIcon = require('../../../../assets/mimo.png');

const ProductScreen = ({ navigation }) => {
	const [term, setTerm] = useState('');

	const [searchApi, results, accesories, food, cleaning, others, errorMessage] = useSearch();

	//Lista Inicial de productos se encuentra en ProductContext
	return (
		<View style={styles.pageStyle}>
			<View style={styles.searchBarStyle}>
				<SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => searchApi(term)} />
			</View>
			<ScrollView>
				<View style={styles.parteSuperior}>
					<Text style={styles.tituloPantalla}>Productos</Text>
					<Image style={styles.logoStyle} source={mimoIcon} />
				</View>
				<View style={styles.botonesAnimales}>
					<View>
						<TouchableOpacity
							onPress={() => {
								searchApi('', 'perro');
							}}
						>
							<MaterialCommunityIcons name='dog' size={70} color='black' style={styles.botonPerro} />
						</TouchableOpacity>
						<Text style={styles.textoBotonAnimal}>Perro</Text>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => {
								searchApi('', 'gato');
							}}
						>
							<MaterialCommunityIcons name='cat' size={70} color='black' style={styles.botonGato} />
						</TouchableOpacity>
						<Text style={styles.textoBotonAnimal}>Gato</Text>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => {
								searchApi('', 'pez');
							}}
						>
							<MaterialCommunityIcons name='fish' size={70} color='black' style={styles.botonPez} />
						</TouchableOpacity>
						<Text style={styles.textoBotonAnimal}>Pescado</Text>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => {
								searchApi('', 'conejo');
							}}
						>
							<MaterialCommunityIcons name='rabbit' size={70} color='black' style={styles.botonConejo} />
						</TouchableOpacity>
						<Text style={styles.textoBotonAnimal}>Conejo</Text>
					</View>
				</View>
				<Text style={styles.tiposDeArticulos}>Comida</Text>
				<View style={styles.productListStyle}>
					<FlatList
						data={food}
						keyExtractor={item => item._id}
						horizontal={true}
						renderItem={({ item }) => {
							return <ProductComponent product={item} pantalla={'ProductDetails'} />;
						}}
					/>
				</View>
				<Text style={styles.tiposDeArticulos}>Accesorios</Text>
				<View style={styles.productListStyle}>
					<FlatList
						data={accesories}
						keyExtractor={item => item._id}
						horizontal={true}
						renderItem={({ item }) => {
							return <ProductComponent product={item} pantalla={'ProductDetails'} />;
						}}
					/>
				</View>
				<Text style={styles.tiposDeArticulos}>Limpieza</Text>
				<View style={styles.productListStyle}>
					<FlatList
						data={cleaning}
						keyExtractor={item => item._id}
						horizontal={true}
						renderItem={({ item }) => {
							return <ProductComponent product={item} pantalla={'ProductDetails'} />;
						}}
					/>
				</View>
				<Text style={styles.tiposDeArticulos}>Otros</Text>
				<View style={styles.productListStyle}>
					<FlatList
						data={others}
						keyExtractor={item => item._id}
						horizontal={true}
						renderItem={({ item }) => {
							return <ProductComponent product={item} pantalla={'ProductDetails'}/>;
						}}
					/>
				</View>
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	tiposDeArticulos: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 10,
	},
	textoBotonAnimal: {
		alignSelf: 'center',
		fontSize: 18,
	},
	botonPerro: {
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
		backgroundColor: '#9FCAE2',
	},
	botonGato: {
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
		backgroundColor: '#BCDB89',
	},
	botonPez: {
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
		backgroundColor: '#FF9AA2',
	},
	botonConejo: {
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
		backgroundColor: '#E8916C',
	},
	botonesAnimales: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	parteSuperior: {
		marginTop: 15,
		flexDirection: 'row',
	},
	logoStyle: {
		height: 90,
		width: 90,
		alignSelf: 'flex-end',
	},
	tituloPantalla: {
		fontSize: 30,
		fontWeight: 'bold',
		marginLeft: 20,
		flex: 1,
		alignSelf: 'center',
	},
	titleStyle: {
		fontSize: 18,
		marginTop: 50,
		alignSelf: 'center',
	},
	searchBarStyle: {
		flexShrink: 0,
		marginTop: 10,
	},
	iconListStyle: {
		margin: 10,
	},
	productListStyle: {
		//width: '100%',
		flex: 1,
		//flexDirection: 'row'
	},
	pageStyle: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF7BB',
		alignItems: 'stretch',
	},

	selectType: {
		alignSelf: 'center',
		flexDirection: 'row',
	},
});

export default withNavigation(ProductScreen);
