import React, { useContext } from 'react';
import { Context as PurchaseContext } from '../context/PurchaseContext';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PurchaseComponent from './purchaseComponent';

const PurchaseListComponent = props => {
	const { state: purchases } = useContext(PurchaseContext);

	return (
		<View style={styles.pageStyle}>
			<View>
				<Text style={styles.titleStyle}>Mis compras ''</Text>
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
	titleStyle: {
		marginTop: 70,
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 20,
	},

	pageStyle: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
});

export default PurchaseListComponent;
