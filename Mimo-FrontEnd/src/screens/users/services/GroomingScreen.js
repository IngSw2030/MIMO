import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import ServiceList from '../../../components/serviceList';

const GroomingScreen = screenProps => {
	const imageSource = require('../../../../assets/mimo.png');
	const servicios = [
		{
			id: '1000',
			nombre: 'McLovin',
			calificacion: '5',
			imageSource: { imageSource },
			tipo: 'Estilista',
			precio: '15000',
			descripcion: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		},
		{
			id: '1003',
			nombre: 'Ivan',
			calificacion: '1',
			imageSource: { imageSource },
			tipo: 'Estilista',
			precio: '20000',
			descripcion: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		},
		{
			id: '1012',
			nombre: 'Dario',
			calificacion: '4',
			imageSource: { imageSource },
			tipo: 'Estilista',
			precio: '22000',
			descripcion: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		},
	];
	return (
		<View style={styles.generalStyle}>
			<Text style={styles.headerStyle}>{screenProps.navigation.getParam('screenTitle')}</Text>
			<FlatList
				data={servicios}
				keyExtractor={item => item.id}
				renderItem={({ item }) => {
					return (
						<ServiceList
							id={item.id}
							nombre={item.nombre}
							precio={item.precio}
							descripcion={item.descripcion}
							tipo={item.tipo}
							imageSource={imageSource}
							calificacion={item.calificacion}
						/>
					);
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: 'rgba(159, 202, 226, 0.89)',
	},
	headerStyle: {
		marginTop: 30,
		marginLeft: 15,
		fontSize: 23,
		fontWeight: 'bold',
	},
	generalStyle: {
		backgroundColor: '#EDDF98',
		height: 1000,
	},
});

export default withNavigation(GroomingScreen);
