import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as PurchaseContext } from '../../../context/PurchaseContext';
import { navigate } from '../../../navigationRef';
import usePrice from '../../../hooks/usePrice';

const wait = timeout => {
	return new Promise(resolve => {
		setTimeout(resolve, timeout);
	});
};
const HistoryScreen = () => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { state: purchases, getMyPurchases } = useContext(PurchaseContext);

	const mimoIcon = require('../../../../assets/mimo.png');
	const [estado, setEstado] = useState('Pendiente');

	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		getMyPurchases().then(() => setRefreshing(false));
	}, []);
	function renderPurchase(item, status) {
		var color;
		status == 'Completada' ?
			color = '#B8DC7D'
			: status == 'Pendiente' ?
				color = '#E8916C'
				: color = '#88CCF2'
		if (item.status === status) {
			return (
				<View
					style={[styles.containerPhoto, { backgroundColor: color }]}
				>
					<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
						<Image style={styles.image} source={{ uri: `data:image/gif;base64,${item.foto}` }} />
					</View>
					<View style={[styles.infoContainerStyle, { backgroundColor: color }]}>
						<Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Producto:</Text>
							<Text style={styles.info}> {item.producto}</Text>
						</Text>
						<Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Unidades:</Text>
							<Text style={styles.info}> {item.unidades}</Text>
						</Text>
						<Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Precio Total:</Text>
							<Text style={styles.info}> {usePrice(item.precio)}</Text>
						</Text>
						<Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Vendedor:</Text>
							<Text style={styles.info}> {item.vendedor}</Text>
						</Text>
						<Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Numero:</Text>
							<Text style={styles.info}> {item.numero}</Text>
						</Text>
						<Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>ID:</Text>
							<Text style={styles.infoId}> {item.id}</Text>
						</Text>
					</View>
				</View>
			);
		}
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#FCF4CB', flexDirection: 'column' }}>
			<Text style={styles.title}>Historial de Compras {' '}</Text>
			<View style={styles.selectorStyle}>
				<TouchableOpacity style={styles.desplegablesCompletada} onPress={() => setEstado('Completada')}>
					<Text style={styles.textoDesplegable}>Completadas</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.desplegablesPendiente} onPress={() => setEstado('Pendiente')}>
					<Text style={styles.textoDesplegable}>Por Confirmar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.desplegablesRechazada} onPress={() => setEstado('Rechazada')}>
					<Text style={styles.textoDesplegable}>Declinadas</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.flatListStyle}>
				<FlatList
					refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
					keyExtractor={item => item.id}
					data={purchases}
					renderItem={({ item }) => {
						return renderPurchase(item, estado);
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	selectorStyle: {
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		flexWrap: 'nowrap',
	},
	textoDesplegable: {
		alignSelf: 'center',
		fontSize: 16
	},
	desplegablesCompletada: {
		backgroundColor: '#B8DC7D',
		borderRadius: 25,
		justifyContent: 'center',
		includeFontPadding: true,
		height: 45,
		width: '30%',
	},
	desplegablesPendiente: {
		backgroundColor: '#E8916C',
		borderRadius: 25,
		justifyContent: 'center',
		includeFontPadding: true,
		height: 45,
		width: '30%',
	},
	desplegablesRechazada: {
		backgroundColor: '#88CCF2',
		borderRadius: 25,
		justifyContent: 'center',
		includeFontPadding: true,
		height: 45,
		width: '30%',
	},
	title: {
		marginTop: '8%',
		marginBottom: '5%',
		fontSize: 36,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	flatListStyle: {
		marginTop: '5%',
		marginBottom: '40%',
		marginHorizontal: '2%',
		flexWrap: 'nowrap',
	},
	image: {
		height: '85%',
		width: 100,
		borderRadius: 30,
		marginLeft: '10%',
	},
	info: {
		fontSize: 15,
	},
	infoId: {
		fontSize: 16,
		alignSelf: 'center',
	},
	containerPhoto: {
		height: 160,
		//backgroundColor: '#FFA1A9',
		marginTop: '2%',
		marginBottom: '2%',
		flexDirection: 'row',
		borderRadius: 25,
	},
	infoContainerStyle: {
		borderRadius: 25,
		marginTop: '2%',
		marginRight: '10%'
	},
});

export default withNavigation(HistoryScreen);
