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
		var color;
		status == 'Completada' ?
			color = '#B8DC7D'
			: status == 'Pendiente' ?
				color = '#E8916C'
				: color = '#88CCF2'
		if (item.purchase.status === status) {
			return (
				<View style={[styles.containerPhoto, { backgroundColor: color }]}>
					<View style={{ flexDirection: 'column', justifyContent: 'center' }}>
						<Image style={styles.image} source={{ uri: `data:image/gif;base64,${item.photo}` }} />
					</View>
					<View style={[styles.infoContainerStyle, { backgroundColor: color }]}>
						<Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Producto:</Text>
							<Text style={styles.info}> {item.name}</Text>
						</Text>
						<Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Unidades:</Text>
							<Text style={styles.info}> {item.purchase.amount}</Text>
						</Text>
						<Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Precio Total:</Text>
							<Text style={styles.info}> {usePrice(item.price)}</Text>
						</Text>
						<Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>ID:</Text>
							<Text style={styles.infoId}> {item.purchase._id}</Text>
						</Text>
						{estado === 'Pendiente' ? botonesRechazarConfirmar() : null}
					</View>
				</View>
			);
		}
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#FCF4CB', flexDirection: 'column' }}>
			<Text style={styles.title}>Tus Ventas {' '}</Text>
			<View style={styles.selectorContainerStyle}>
				<TouchableOpacity
					style={styles.desplegablesCompletada}
					onPress={() => setEstado('Completada')}
				>
					<Text style={styles.textoDesplegable}>Completadas</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.desplegablesPendiente}
					onPress={() => setEstado('Pendiente')}
				>
					<Text style={styles.textoDesplegable}>Por Confirmar</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.desplegablesRechazada}
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
		marginTop: '5%',
		fontSize: 36,
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
		marginLeft: '10%',
	},
	info: {
		fontSize: 15,
	},
	infoId: {
		fontSize: 14,
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
		borderRadius: 25,
		marginTop: '2%',
		marginRight: '10%'
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
