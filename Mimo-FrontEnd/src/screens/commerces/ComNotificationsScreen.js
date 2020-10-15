import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as PurchaseContext } from '../../context/PurchaseContext';
import usePrice from '../../hooks/usePrice';
const ComNotificationsScreen = ({navigation}) => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { state: purchases,getMySells } = useContext(PurchaseContext);
	useEffect(() => {
        getMySells();
        console.log(purchases);
	}, []);

	const mimoIcon = require('../../../assets/mimo.png');

	function renderPurchase(item, status) {
		//console.log('item en RederPurchase', item);
		if (item.purchase.status ===status) {
            console.log('estoy enif');
			return (
				<View style={styles.containerPhoto}>
					<View>
						<Image style={styles.image} source={mimoIcon} />
					</View>
					<View style={styles.container}>
						<Text style={styles.info}>Producto: {item.name}</Text>
                        <Text style={styles.info}>ID Venta: {item.purchase._id}</Text>
                        <Text style={styles.info}>Unidades: {item.purchase.amount}</Text>
						<Text style={styles.info}>Precio Total: {usePrice(item.price)}</Text>
						<Text style={styles.info}>Email: {item.purchase.buyer_info[0].email} </Text>
                        <Text style={styles.info}> estado:{item.purchase.status}</Text>
					</View>
				</View>
			);
        }
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#FCF4CB', justifyContent: 'center', alignItems: 'stretch' }}>
			<Text style={styles.title}>Historial de Compras</Text>
			<View style={styles.generalView}>
				<Text style={styles.text}>Por confirmar</Text>
				<FlatList
					keyExtractor={item => item.purchase._id}
                    data={purchases}
					renderItem={({ item }) => {
                        console.log("entro al render",item )
						return renderPurchase(item, 'Pendiente');
					}}
				/>
			</View>

			<View style={styles.generalView}>
				<Text style={styles.text}>Por confirmar</Text>
				<FlatList
					keyExtractor={item => item.purchase._id}
                    data={purchases}
					renderItem={({ item }) => {
                        console.log("entro al render",item )
						return renderPurchase(item, 'Completada');
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
		alignSelf: 'center',
	},
	generalView: {
		justifyContent: 'center',
		//  flexDirection: 'row',
		flexWrap: 'wrap',
		//marginTop: '5%',
		//marginBottom: '3%',
		marginHorizontal: '5%',
		height: '50%',
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

export default withNavigation(ComNotificationsScreen);
