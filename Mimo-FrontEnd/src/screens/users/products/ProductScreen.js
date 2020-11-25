import React, { useState, useContext, useEffect } from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductComponent from '../../../components/productComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from '../../../components/searchBar';
const mimoIcon = require('../../../../assets/mimo.png');
import { Context as ProductContext } from '../../../context/ProductContext';


const ProductScreen = ({ navigation }) => {
	const [term, setTerm] = useState('');
	const { state, getProduct } = useContext(ProductContext);

	//const results = state.productos;
	const accesories = state.accesories;
	const food = state.food;
	const cleaning = state.cleaning;
	const others = state.others;

	const aracnido = require( '../../../../assets/aracnido.png');
    const ave = require( '../../../../assets/ave.png');
    const caracol = require( '../../../../assets/caracol.png');
    const crustaceo = require( '../../../../assets/crustaceo.png');
    const hamster = require( '../../../../assets/hamster.png');
    const serpiente = require( '../../../../assets/serpiente.png');
    const tortuga = require( '../../../../assets/tortuga.png');
    const perro = require( '../../../../assets/perro.png');
    const gato = require( '../../../../assets/gato.png');
    const pez = require( '../../../../assets/pez.png');
    const conejo = require( '../../../../assets/conejo.png');

	return (
		<View style={styles.pageStyle}>
			<View style={styles.searchBarStyle}>
				<SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => getProduct({ name: term, pets: '' })} />
			</View>
			<ScrollView>
				<View style={styles.parteSuperior}>
					<Text style={styles.tituloPantalla}>Productos</Text>
					<Image style={styles.logoStyle} source={mimoIcon} />
				</View>
				<View style={styles.botonesAnimales}>
					<ScrollView horizontal= {true}>

						<View>
							<TouchableOpacity
								style = {styles.botonPerro}
								onPress={() => {
									getProduct({ name: '', pets: 'perro' });
								}}
							>
								<Image source={perro} style={{alignSelf: 'center', height: 70, width: 70,}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Perro</Text>
						</View>
						<View>
							<TouchableOpacity
								style = {styles.botonGato}
								onPress={() => {
									getProduct({ name: '', pets: 'gato' });
								}}
							>
								<Image source={gato} style={{alignSelf: 'center', height: 70, width: 70}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Gato</Text>
						</View>
						<View>
							<TouchableOpacity
								style = {styles.botonPez}
								onPress={() => {
									getProduct({ name: '', pets: 'pez' });
								}}
							>
								<Image source={pez} style={{alignSelf: 'center', height: 70, width: 70}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Pez</Text>
						</View>
						<View>
							<TouchableOpacity
								style = {styles.botonConejo}
								onPress={() => {
									getProduct({ name: '', pets: 'conejo' });
								}}
							>
								<Image source={conejo} style={{alignSelf: 'center', height: 70, width: 70}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Conejo</Text>
						</View>
						<View>
							<TouchableOpacity
								style = {styles.botonPerro}
								onPress={() => {
									getProduct({ name: '', pets: 'hamster' });
								}}
							>
								<Image source={hamster} style={{alignSelf: 'center', height: 70, width: 70}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Hamster</Text>
						</View>
						<View>
							<TouchableOpacity
								style = {styles.botonGato}
								onPress={() => {
									getProduct({ name: '', pets: 'aracnido' });
								}}
							>
								<Image source={aracnido} style={{alignSelf: 'center', height: 70, width: 70}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Aracnido</Text>
						</View>
						<View>
							<TouchableOpacity
								style = {styles.botonPez}
								onPress={() => {
									getProduct({ name: '', pets: 'ave' });
								}}
							>
								<Image source={ave} style={{alignSelf: 'center', height: 70, width: 70}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Ave</Text>
						</View>
						<View>
							<TouchableOpacity
								style = {styles.botonConejo}
								onPress={() => {
									getProduct({ name: '', pets: 'caracol' });
								}}
							>
								<Image source={caracol} style={{alignSelf: 'center', height: 70, width: 70}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Caracol </Text>
						</View>
						<View>
							<TouchableOpacity
								style = {styles.botonPerro}
								onPress={() => {
									getProduct({ name: '', pets: 'crustaceo' });
								}}
							>
								<Image source={crustaceo} style={{alignSelf: 'center', height: 70, width: 70}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Crustaceo</Text>
						</View>
						<View>
							<TouchableOpacity
								style = {styles.botonGato}
								onPress={() => {
									getProduct({ name: '', pets: 'serpiente' });
								}}
							>
								<Image source={serpiente} style={{alignSelf: 'center', height: 70, width: 70}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Serpiente</Text>
						</View>
						<View>
							<TouchableOpacity
								style = {styles.botonPez}
								onPress={() => {
									getProduct({ name: '', pets: 'tortuga' });
								}}
							>
								<Image source={tortuga} style={{alignSelf: 'center', height: 70, width: 70}} />
							</TouchableOpacity>
							<Text style={styles.textoBotonAnimal}>Tortuga</Text>
						</View>
					</ScrollView>
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
							return <ProductComponent product={item} pantalla={'ProductDetails'} />;
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
		margin: 5,
		backgroundColor: '#9FCAE2',
	},
	botonGato: {
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
		margin: 5,
		backgroundColor: '#BCDB89',
	},
	botonPez: {
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
		margin: 5,
		backgroundColor: '#FF9AA2',
	},
	botonConejo: {
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
		margin: 5,
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
