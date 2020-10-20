import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as SellsContext } from '../../context/SellsContext';
import usePrice from '../../hooks/usePrice';

const ComNotificationsScreen = ({ navigation }) => {
	const { state: sells, updateStatus, getMySells } = useContext(SellsContext);

	const [estado, setEstado] = useState('Completada');

	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		getMySells().then(() => setRefreshing(false));
	}, []);
	const botonesRechazarConfirmar = () => {
		return (
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
		);
	};
	function renderPurchase(item, status) {
		if (item.purchase.status === status) {
			return (
				<View style={styles.containerPhoto}>
					<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
						<Image style={styles.image} source={{ uri: `data:image/gif;base64,${item.photo}` }} />
					</View>
					<View style={styles.infoContainerStyle}>
						<Text style={styles.info}>Producto: {item.name}</Text>
						<Text style={styles.info}>Unidades: {item.purchase.amount}</Text>
						<Text style={styles.info}>Precio Total: {usePrice(item.price)}</Text>
						<Text style={styles.infoId}>ID Venta: {item.purchase._id}</Text>
						{estado === 'Pendiente' ? botonesRechazarConfirmar() : null}
					</View>
				</View>
			);
		}
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#FCF4CB', flexDirection: 'column', alignItems: 'stretch' }}>
			<Text style={styles.title}>Historial de Ventas</Text>
			<View style={styles.selectorContainerStyle}>
				<TouchableOpacity
					style={estado === 'Completada' ? styles.desplegablesPressedStyle : styles.desplegables}
					onPress={() => setEstado('Completada')}
				>
					<Text style={styles.textoDesplegable}>Completadas</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={estado === 'Pendiente' ? styles.desplegablesPressedStyle : styles.desplegables}
					onPress={() => setEstado('Pendiente')}
				>
					<Text style={styles.textoDesplegable}>Por Confirmar</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={estado === 'Rechazada' ? styles.desplegablesPressedStyle : styles.desplegables}
					onPress={() => setEstado('Rechazada')}
				>
					<Text style={styles.textoDesplegable}>Declinadas</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.flatListStyle}>
				<FlatList
					refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
					keyExtractor={item => item.purchase._id}
					data={sells}
					renderItem={({ item }) => {
						return renderPurchase(item, estado);
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	selectorContainerStyle: {
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		flexWrap: 'nowrap',
	},
	desplegablesPressedStyle: {
		backgroundColor: 'green',
		borderRadius: 25,
		justifyContent: 'center',
		includeFontPadding: true,
		height: 45,
		width: '30%',
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
		backgroundColor: '#BAA0F2',
		marginTop: '2%',
		marginBottom: '2%',
		flexDirection: 'row',
		borderRadius: 15,
	},
	infoContainerStyle: {
		backgroundColor: '#BAA0F2',
		flexGrow: 1,
		flexWrap: 'wrap',
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
