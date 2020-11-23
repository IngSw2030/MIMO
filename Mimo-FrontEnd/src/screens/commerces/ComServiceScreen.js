import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Picker, FlatList, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { navigate } from '../../navigationRef';
import useSearch from '../../hooks/useResultsMyServices';
import ServiceComponent from '../../components/serviceComponent';
import { useEffect } from 'react';

const ComServicesScreen = ({ navigation }) => {
	const mimoIcon = require('../../../assets/mimo.png');
	const text = 'Limpieza de Peceras';
	const [selectedValue, setSelectedValue] = useState(text);
	const [searchApi, results, errorMessage] = useSearch();
	
	//useEffect permite que lo que esta adentro se realice unicamente si la pantalla esta "dibujada" y lista para mostrarse
	useEffect(() => {
		console.log('Entra al useEffect ComServiceScreen');
		//willFocus es un evento que indica si estamos viendo la pantalla.
		navigation.addListener('willFocus', async () => {
			await searchApi();
			await searchApi();
			console.log('willFocus runs');
		});
	}, []);

	return (
		<View style={{ backgroundColor: '#FFF7BB', flex: 1 }}>
			<View>
				<Image style={styles.logoStyle} source={mimoIcon} />
				<Text style={styles.titleStyle}> Servicios </Text>
			</View>
			<View style={styles.addServiceStyle}>
				<View style={styles.pickerStyle}>
					<Picker selectedValue={selectedValue} onValueChange={itemValue => setSelectedValue(itemValue)}>
						<Picker.Item label='Limpieza de Peceras' value='Limpieza de Peceras' />
						<Picker.Item label='Paseos' value='Paseos' />
						<Picker.Item label='Estilista' value='Estilista' />
						<Picker.Item label='Cuidador' value='Cuidador' />
					</Picker>
				</View>
				<View style={styles.addButtonStyle}>
					<TouchableOpacity
						style={{ alignSelf: 'center' }}
						onPress={() => {
							navigate('ComAddService', {
								categoria: selectedValue,
							});
						}}
					>
						<MaterialCommunityIcons name='plus' size={30} color='black' />
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ flex: 1 }}>
				<FlatList
					data={results.services}
					keyExtractor={item => item._id}
					renderItem={({ item }) => {
						return <ServiceComponent service={item} pantalla={'ComEditService'} />;
					}}
				/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	logoStyle: {
		height: 150,
		width: 150,
		alignSelf: 'center',
		marginTop: 50,
	},
	titleStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 5,
		marginLeft: 10,
	},
	iconStyle: {
		height: 120,
		width: 120,
		alignSelf: 'center',
		//flexGrow: 1,
	},
	buttonStyle: {
		backgroundColor: '#88CCF2',
		borderRadius: 10,
		height: 40,
		width: 150,
		marginLeft: 10,
		marginBottom: 10,
		flexDirection: 'column',
		flexGrow: 1,
	},
	addServiceStyle: {
		flexDirection: 'row',
	},
	pickerStyle: {
		backgroundColor: '#88CCF2',
		marginRight: 10,
		marginHorizontal: 10,
		borderRadius: 10,
		flexGrow: 1,
	},
	addButtonStyle: {
		backgroundColor: '#88CCF2',
		height: 40,
		width: 40,
		justifyContent: 'center',
		marginRight: 10,
		borderRadius: 5,
		alignSelf: 'center',
	},
});
export default withNavigation(ComServicesScreen);
