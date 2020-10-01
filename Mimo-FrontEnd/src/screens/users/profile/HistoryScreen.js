import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import PurchaseListComponent from '../../../components/purchaseListComponent';

const HistoryScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, backgroundColor: '#EDDF98', justifyContent: 'center', alignItems: 'stretch' }}>
			<Text>Pantalla de HistoryScreen</Text>
			<PurchaseListComponent />
		</View>
	);
};

export default withNavigation(HistoryScreen);
