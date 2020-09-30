import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import ProductList from '../../../components/productList';

const AccesoriesScreen = () => {
	const productos = [
		{
			nombre: 'Rueda para hamster',
			precio: '21000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '1',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster2',
			precio: '22000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '2',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster3',
			precio: '30000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '3',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster4',
			precio: '21000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '4',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster6',
			precio: '22000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '5',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster rtx 3080 4k',
			precio: '3454500',
			descripcion: 'Full rgb +10rpm ',
			id: '6',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster',
			precio: '21000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '7',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster2',
			precio: '22000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '8',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster3',
			precio: '30000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '9',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster4',
			precio: '21000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '10',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster6',
			precio: '22000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '11',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster rtx 3080 4k',
			precio: '3454500',
			descripcion: 'Full rgb +10rpm ',
			id: '12',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster',
			precio: '21000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '13',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster2',
			precio: '22000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '14',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster3',
			precio: '30000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '15',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster4',
			precio: '21000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '16',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster6',
			precio: '22000',
			descripcion: 'Está bien bonita la rueda para hamster',
			id: '17',
			image: require('../../../../assets/ruedaHamster.png'),
		},
		{
			nombre: 'Rueda para hamster rtx 3080 4k',
			precio: '3454500',
			descripcion: 'Full rgb +10rpm ',
			id: '18',
			image: require('../../../../assets/ruedaHamster.png'),
		},
	];
	return (
		<View style={{ flex: 1, backgroundColor: '#EDDF98', justifyContent: 'center', alignItems: 'stretch' }}>
			<Text>Pantalla de AccesoriesScreen</Text>
			<ProductList productos={productos} />
		</View>
	);
};
const Styles = StyleSheet.create({});
export default withNavigation(AccesoriesScreen);
