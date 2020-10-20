import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as PurchaseContext } from '../../../context/PurchaseContext';

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
	/* useEffect(() => {
		purchases.forEach(element => {
			console.log('Producto: ', element.producto);
			console.log('Status: ', element.status);
		});
	}, [purchases]); */
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		getMyPurchases().then(() => setRefreshing(false));
	}, []);
	function renderPurchase(item, status) {
		if (item.status === status) {
			return (
				<View style={styles.containerPhoto}>
					<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
						<Image style={styles.image} source={{ uri: `data:image/gif;base64,${item.foto}` }} />
					</View>
					<View style={styles.infoContainerStyle}>
						<Text style={styles.info}>Producto: {item.producto}</Text>
						<Text style={styles.info}>Unidades: {item.unidades}</Text>
						<Text style={styles.info}>Precio Total: {usePrice(item.precio)}</Text>
						<Text style={styles.info}>Vendedor: {item.vendedor}</Text>
						<Text style={styles.info}>Numero: {item.numero} </Text>
						<Text style={styles.infoId}>ID Venta: {item.id}</Text>
					</View>
				</View>
			);
		}
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#FCF4CB', flexDirection: 'column', alignItems: 'stretch' }}>
			<Text style={styles.title}>Historial de Compras</Text>
			<View style={styles.selectorStyle}>
				<TouchableOpacity style={styles.desplegables} onPress={() => setEstado('Completada')}>
					<Text style={styles.textoDesplegable}>Completadas</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.desplegables} onPress={() => setEstado('Pendiente')}>
					<Text style={styles.textoDesplegable}>Por Confirmar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.desplegables} onPress={() => setEstado('Rechazada')}>
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
	},
	desplegables: {
		backgroundColor: '#B0EFEF',
		borderRadius: 25,
		justifyContent: 'center',
		includeFontPadding: true,
		height: 45,
		width: '30%',
	},
	title: {
		marginTop: '5%',
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	flatListStyle: {
		marginTop: '5%',
		flexWrap: 'nowrap',
		marginHorizontal: '3%',
		flex: 1,
	},
	image: {
		height: '85%',
		width: 100,
		borderRadius: 30,
		marginLeft: '17%',
	},
	info: {
		fontSize: 13,
		fontWeight: 'bold',
	},
	infoId: {
		fontSize: 12,
		alignSelf: 'center',
	},
	containerPhoto: {
		height: 140,
		backgroundColor: '#FFA1A9',
		marginTop: '2%',
		marginBottom: '2%',
		flexDirection: 'row',
		borderRadius: 15,
	},
	infoContainerStyle: {
		backgroundColor: '#FFA1A9',
		flexGrow: 1,
		flexWrap: 'wrap',
	},
});

export default withNavigation(HistoryScreen);
