import React from 'react';
import { View, Text, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

const ProductDetailsScreen = props => {
	console.log(props);
	return (
		<View style={{ flex: 1, backgroundColor: '#EDDF98' }}>
			<Text>Pantalla de ProductDetailsScreen</Text>
			<Text>{props.name}</Text>
		</View>
	);
};

export default withNavigation(ProductDetailsScreen);
