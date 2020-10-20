import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as SellsContext } from '../../context/SellsContext';
import usePrice from '../../hooks/usePrice';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';

const ComNotificationsScreen = ({ navigation }) => {
	const { state: sells, updateStatus, getMySells } = useContext(SellsContext);
	const mimoIcon = require('../../../assets/mimo.png');

	const [mostrarConfirmar, setMostrarConfirmar] = useState(0);
	const [mostrarCompletadas, setMostrarCompletadas] = useState(0);
	useEffect(() => {
		console.log(sells);
		/* sells.forEach(element => {
			console.log(element.id);
		}); */
	}, []);

	function renderPurchase(item) {
		if (item.purchase.status === 'Pendiente') {
			return (
				<View style={styles.containerPhotoBig}>
					<View style={{ flexDirection: 'row' }}>
						<View>
							<Image style={styles.image} source={{ uri: `data:image/gif;base64,${item.photo}` }} />
						</View>
						<View style={styles.container}>
							<Text style={styles.info}>Producto: {item.name}</Text>
							<Text style={styles.info}>ID Venta: {item.purchase._id}</Text>
							<Text style={styles.info}>Unidades: {item.purchase.amount}</Text>
							{item.price ? <Text style={styles.info}>Precio Total: {usePrice(item.price)}</Text> : null}
							<Text style={styles.info}>Email: {item.purchase.buyer_info[0].email} </Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
						<TouchableOpacity
							style={styles.roundedContainerDeclineStyle}
							onPress={async () => {
								try {
									await updateStatus({ idPurchase: item.purchase._id, status: 'Rechazada' });
									getMySells();
								} catch (error) {
									console.log(error);
								}
							}}
						>
							<Text>Rechazar</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.roundedContainerAcceptStyle}
							onPress={async () => {
								try {
									await updateStatus({ idPurchase: item.purchase._id, status: 'Completada' });
									getMySells();
								} catch (error) {
									console.log(error);
								}
							}}
						>
							<Text>Completada</Text>
						</TouchableOpacity>
					</View>
				</View>
			);
		} else {
			return (
				<View style={styles.containerPhoto}>
					<View>
						<Image style={styles.image} source={{ uri: `data:image/gif;base64,${item.photo}` }} />
					</View>
					<View style={styles.container}>
						<Text style={styles.info}>Producto: {item.name}</Text>
						<Text style={styles.info}>ID Venta: {item.purchase._id}</Text>
						<Text style={styles.info}>Unidades: {item.purchase.amount}</Text>
						{item.price ? <Text style={styles.info}>Precio Total: {usePrice(item.price)}</Text> : null}
						<Text style={styles.info}>Email: {item.purchase.buyer_info[0].email} </Text>
					</View>
				</View>
			);
		}
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#FCF4CB' }}>
			<ScrollView>
				<Text style={styles.title}>Historial de Compras</Text>
				<View style={styles.generalView}>
					<TouchableOpacity style={styles.desplegables} onPress={() => setMostrarCompletadas(!mostrarCompletadas)}>
						<Text style={styles.textoDesplegable}>Por Confirmar</Text>
					</TouchableOpacity>
					{mostrarCompletadas ? (
						<FlatList
							keyExtractor={item => item.id}
							data={sells}
							renderItem={({ item }) => {
								if (item.purchase.status === 'Pendiente') {
									return renderPurchase(item);
								}
							}}
						/>
					) : null}
				</View>
				<View style={styles.generalView}>
					<TouchableOpacity style={styles.desplegables} onPress={() => setMostrarConfirmar(!mostrarConfirmar)}>
						<Text style={styles.textoDesplegable}>Completadas</Text>
					</TouchableOpacity>
					{mostrarConfirmar ? (
						<FlatList
							keyExtractor={item => item.id}
							data={sells}
							renderItem={({ item }) => {
								if (item.purchase.status === 'Completada') {
									return renderPurchase(item);
								}
							}}
						/>
					) : null}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	textoDesplegable: {
		fontSize: 24,
		paddingLeft: '3%',
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
		height: '60%',
		width: 100,
		marginBottom: '3%',
		borderRadius: 30,
		alignContent: 'center',
		margin: 5,
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
		backgroundColor: '#BAA0F2',
		marginTop: 15,
		flexDirection: 'row',
		borderRadius: 20,
		alignSelf: 'center',
		marginHorizontal: '9%',
		//justifyContent:'space-between'
	},
	containerPhotoBig: {
		height: 170,
		width: 300,
		backgroundColor: '#BAA0F2',
		//marginBottom: 15,
		marginTop: 15,
		flexDirection: 'column',
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
		height: 120,
		width: 100,
		backgroundColor: '#BAA0F2',
		marginBottom: 1,
	},
	roundedContainerDeclineStyle: {
		marginTop: 1,
		marginHorizontal: 10,
		backgroundColor: '#FF9AA2',
		height: 35,
		width: 90,
		borderRadius: 75,
		alignItems: 'center',
	},
	roundedContainerAcceptStyle: {
		marginTop: 1,
		marginHorizontal: 10,
		backgroundColor: '#B8DC7D',
		height: 35,
		width: 90,
		borderRadius: 75,
		alignItems: 'center',
	},
});

export default withNavigation(ComNotificationsScreen);
