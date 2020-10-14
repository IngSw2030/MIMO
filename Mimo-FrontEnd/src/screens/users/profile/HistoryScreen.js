import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import WideListComponent from '../../../components/wideListComponent';
import usePurchaseID from '../../../hooks/usePurchaseID';
import { Context as PurchaseContext } from '../../../context/PurchaseContext';
const HistoryScreen = () => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { state: purchases } = useContext(PurchaseContext);
	const PurchaseComponent = usePurchaseID;

 	const mimoIcon = require('../../../../assets/mimo.png');
	const sellers = [
		{ producto: 'Whiskas 1,5 kg', unidades: '1', precio: '$8000', vendedor: 'Pablito', numero: '3208765430', id: 131231 },
		{ producto: 'Whiskas 1,5 kg', unidades: '1', precio: '$8000', vendedor: 'Pablito', numero: '3208765430', id: 133451 },
		{ producto: 'Whiskas 1,5 kg', unidades: '1', precio: '$8000', vendedor: 'Pablito', numero: '3208765430', id: 23435 },
		{ producto: 'Whiskas 1,5 kg', unidades: '1', precio: '$8000', vendedor: 'Pablito', numero: '3208765430', id: 145454 },

	];

	return (
		<View style={{ flex: 1, backgroundColor: '#FCF4CB', justifyContent: 'center', alignItems: 'stretch' }}>
			<Text style={styles.title}>Historial de Compras</Text>
			<WideListComponent title='Por confirmar' componentToRender={PurchaseComponent} list={purchases} />
			<View style={styles.generalView}>
				<Text style={styles.text}>Por confirmar</Text>
				<FlatList
					keyExtractor={seller => seller.id}
					data={sellers}
					renderItem={({ item }) => {
						return (
							<View style={styles.containerPhoto}>
								<View >
									<Image style={styles.image} source={mimoIcon} />
								</View>
								<View style={styles.container}>
									<Text style={styles.info}>Producto: {item.producto}</Text>
									<Text style={styles.info}>Unidades: {item.unidades}</Text>
									<Text style={styles.info}>Precio: {item.precio}</Text>
									<Text style={styles.info}>Vendedor: {item.vendedor}</Text>
									<Text style={styles.info}>Numero: ${item.numero} </Text>
									<Text style={styles.info}>ID Venta: {item.producto}</Text>

								</View>
							</View>

						);
					}}
				/>
			</View>

			<View style={styles.generalView}>
				<Text style={styles.text}>Completadas</Text>
				<FlatList
					keyExtractor={seller => seller.id}
					data={sellers}
					renderItem={({ item }) => {
						return (
							<View style={styles.containerPhoto}>
								<View >
									<Image style={styles.image} source={mimoIcon} />
								</View>
								<View style={styles.container}>
									<Text style={styles.info}>Producto: {item.producto}</Text>
									<Text style={styles.info}>Unidades: {item.unidades}</Text>
									<Text style={styles.info}>Precio: {item.precio}</Text>
									<Text style={styles.info}>Vendedor: {item.vendedor}</Text>
									<Text style={styles.info}>Numero: ${item.numero} </Text>
									<Text style={styles.info}>ID Venta: {item.producto}</Text>

								</View>
							</View>

						);
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		marginTop: '20%',
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	generalView: {
		justifyContent: 'center',
		//  flexDirection: 'row',
		flexWrap: 'wrap',
		//marginTop: '5%',
		//marginBottom: '3%',
		marginHorizontal: '5%',
		height: '50%'
	},
	image: {
        height: '80%',
        width: 80,
        marginBottom: '3%',
        borderRadius: 360,
        alignContent:'center',
        margin:2,
	},
	info: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 4,
        width:150
	},
	containerPhoto: {
        height: 100,
        width: 300,
        backgroundColor: '#FFA1A9',
        marginBottom: 10,
        flexDirection: 'row',
		borderRadius: 20,
		alignSelf: 'center'
        //justifyContent:'space-between'
	},
	text: {
		marginTop: '0%',
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
