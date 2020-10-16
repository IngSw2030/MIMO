import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as PurchaseContext } from '../../../context/PurchaseContext';
import usePrice from '../../../hooks/usePrice';
const HistoryScreen = () => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { state: purchases, getMyPurchases } = useContext(PurchaseContext);
	useEffect(() => {
		getMyPurchases();
	}, []);

	const mimoIcon = require('../../../../assets/mimo.png');
	const [mostrarConfirmar, setMostrarConfirmar] = useState(0);
	const [mostrarCompletadas, setMostrarCompletadas] = useState(0);
	const [mostrarDeclinadas, setMostrarDeclinadas] = useState(0);

	function renderPurchase(item, status) {
		console.log('item en RederPurchase', item);
		console.log('item.status', item.status == 'Pendiente');
		if (item.status === status) {
			return (
				<View style={styles.containerPhoto}>
					<View>
						<Image style={styles.image} source={mimoIcon} />
					</View>
					<View style={styles.container}>
						<Text style={styles.info}>Producto: {item.producto}</Text>
						<Text style={styles.info}>Unidades: {item.unidades}</Text>
						<Text style={styles.info}>Precio Total: {usePrice(item.precio)}</Text>
						<Text style={styles.info}>Vendedor: {item.vendedor}</Text>
						<Text style={styles.info}>Numero: {item.numero} </Text>
						<Text style={styles.info}>ID Venta: {item.id}</Text>
					</View>
				</View>
			);
		}
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#FCF4CB' }}>
			<ScrollView>
				<Text style={styles.title}>Historial de Compras ''</Text>
				<View style={styles.generalView}>
					<TouchableOpacity
						style={styles.desplegables}
						onPress={() => setMostrarConfirmar(!mostrarConfirmar)}
					>
						<Text style={styles.textoDesplegable}>Completadas</Text>
					</TouchableOpacity>
					{
						mostrarConfirmar ? <FlatList
							keyExtractor={purchases => purchases.id}
							data={purchases}
							renderItem={({ item }) => {
								return renderPurchase(item, 'Completada');
							}} /> : null

					}
				</View>
				<View style={styles.generalView}>
					<TouchableOpacity
						style={styles.desplegables}
						onPress={() => setMostrarCompletadas(!mostrarCompletadas)}
					>
						<Text style={styles.textoDesplegable}>Por Confirmar</Text>
					</TouchableOpacity>
					{
						mostrarCompletadas ? <FlatList
							keyExtractor={purchases => purchases.id}
							data={purchases}
							renderItem={({ item }) => {
								return renderPurchase(item, 'Pendiente');
							}} /> : null

					}
				</View>
				<View style={styles.generalView}>
					<TouchableOpacity
						style={styles.desplegables}
						onPress={() => setMostrarConfirmar(!mostrarConfirmar)}
					>
						<Text style={styles.textoDesplegable}>Declinadas</Text>
					</TouchableOpacity>
					{
						mostrarConfirmar ? <FlatList
							keyExtractor={purchases => purchases.id}
							data={purchases}
							renderItem={({ item }) => {
								return renderPurchase(item, 'Rechazada');
							}} /> : null

					}
				</View>
			</ScrollView>


		</View>
	);
};

const styles = StyleSheet.create({
	textoDesplegable: {
		fontSize: 24,
		paddingLeft: '3%'
	},
	desplegables: {
		backgroundColor: '#B0EFEF',
		borderRadius: 25,
		width: '95%',
		height: 45,

	},
	title: {
		marginTop: '15%',
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	generalView: {
		marginTop: '5%',
		flexWrap: 'wrap',
		marginHorizontal: '5%',
	},
	image: {
		height: '80%',
		width: 80,
		marginBottom: '3%',
		borderRadius: 360,
		alignContent: 'center',
		margin: 2,
	},
	info: {
		fontSize: 10,
		fontWeight: 'bold',
		marginTop: 4,
		width: 150,
	},
	containerPhoto: {
		height: 120,
		width: 300,
		backgroundColor: '#FFA1A9',
		marginBottom: 10,
		flexDirection: 'row',
		borderRadius: 20,
		alignSelf: 'center',
		marginHorizontal: '9%',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: '3%',
	},
	container: {
		height: 75,
		width: 100,
		backgroundColor: '#FFA1A9',
		marginBottom: 5,
	},
});

export default withNavigation(HistoryScreen);
