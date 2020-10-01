import React, { useState, useContext } from 'react';
import { Context as PurchaseContext } from '../context/PurchaseContext';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	Image,
	SafeAreaView,
	ScrollView,
	StatusBar,
} from 'react-native';
import PurchaseComponent from './purchaseComponent';

const PurchaseListComponent = props => {
	const { state: purchases } = useContext(PurchaseContext);

	return (
		<View style={styles.generalView}>
			<View>
				<Text style={styles.title}>Mis compras</Text>
			</View>
			<View>
				<FlatList
					keyExtractor={purchase => purchase.id}
					data={purchases}
					renderItem={({ item }) => {
						return <PurchaseComponent id={item.id} />;
					}}
				/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	title: {
		marginTop: 70,
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 20,
	},
	textButtons: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		//backgroundColor: '#DBAB9C'
	},
	generalView: {
		flex: 1,
	},
	petButtons: {
		backgroundColor: 'rgba(159, 202, 226, 0.81)',
		borderRadius: 25,
		height: 40,
		width: 300,
		margin: 15,
	},
	container: {
		height: 75,
		width: 100,
		backgroundColor: '#BCDB89',
		marginBottom: 5,
		marginLeft: 15,
	},
	containerPhoto: {
		height: 100,
		width: 300,
		backgroundColor: '#BCDB89',
		marginBottom: 10,
		marginLeft: 10,
		flexDirection: 'row',
		borderRadius: 20,
		//justifyContent:'space-between'
	},
	image: {
		height: 80,
		width: 80,
		marginBottom: 3,
		borderRadius: 360,
		alignContent: 'center',
		margin: 2,
	},
	petInfo: {
		fontSize: 10,
		fontWeight: 'bold',
		marginTop: 4,
	},
});

export default PurchaseListComponent;
