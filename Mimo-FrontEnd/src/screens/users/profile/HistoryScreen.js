import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as PurchaseContext } from '../../../context/PurchaseContext';
import usePrice from '../../../hooks/usePrice';
import { LogBox } from 'react-native';
const HistoryScreen = () => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { state: purchases, getMyPurchases } = useContext(PurchaseContext);
	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
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
					<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
						<Image style={styles.image} source={{ uri: `data:image/gif;base64,${item.foto}` }} />
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
						onPress={() => setMostrarDeclinadas(!mostrarDeclinadas)}
					>
						<Text style={styles.textoDesplegable}>Declinadas</Text>
					</TouchableOpacity>
					{
						mostrarDeclinadas ? <FlatList
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
		marginLeft: '3%',

	},
	image: {
		height: '85%',
		width: 100,
		borderRadius: 30,
		marginLeft: '17%'
	},
	info: {
		fontSize: 13,
		fontWeight: 'bold',
		width: 150,
	},
	containerPhoto: {
		height: 140,
		width: '100%',
		backgroundColor: '#FFA1A9',
		marginTop: '2%',
		marginBottom: '2%',
		flexDirection: 'row',
		borderRadius: 25,
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: '3%',
	},
	container: {
		height: 75,
		backgroundColor: '#FFA1A9',
		marginBottom: 5,
		flex: 1
	},
});

export default withNavigation(HistoryScreen);
