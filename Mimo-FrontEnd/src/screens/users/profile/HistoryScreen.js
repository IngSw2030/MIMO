import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import WideListComponent from '../../../components/wideListComponent';
import usePurchaseID from '../../../hooks/usePurchaseID';
import { Context as PurchaseContext } from '../../../context/PurchaseContext';
const HistoryScreen = () => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { state: purchases } = useContext(PurchaseContext);
	const PurchaseComponent = usePurchaseID;

	return (
		<View style={{ flex: 1, backgroundColor: '#EDDF98', justifyContent: 'center', alignItems: 'stretch' }}>
			<Text>Pantalla de HistoryScreen</Text>
			<WideListComponent title='Mis Compras' componentToRender={PurchaseComponent} list={purchases} />
		</View>
	);
};

export default withNavigation(HistoryScreen);
