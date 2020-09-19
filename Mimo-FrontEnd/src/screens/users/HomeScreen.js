import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
	const mimoIcon = require('../../../assets/mimo.png');
	const vetIcon = require('../../../assets/vetPaw.png');
	const foodIcon = require('../../../assets/food.png');
	const accesoriesIcon = require('../../../assets/toy.png');
	const servicesIcon = require('../../../assets/wrench.png');
	return (
		<View style={({ flexGrow: 2 }, { backgroundColor: '#EDDF98' })}>
			<View>
				<Image style={styles.logoStyle} source={mimoIcon} />
				<Text style={styles.questionStyle}> Que buscas hoy? </Text>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity
					style={styles.servicesStyle}
					onPress={() => navigation.navigate('Services')}
				>
					<Image style={styles.iconStyle} source={servicesIcon} />
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.vetStyle}
					onPress={() => navigation.navigate('Veterinaries')}
				>
					<Image style={styles.iconStyle} source={vetIcon} />
				</TouchableOpacity>
			</View>
            <View style={styles.generalView}>
            <TouchableOpacity
					style={styles.accesoriesStyle}
					onPress={() => navigation.navigate('Accesories')}
				>
					<Image style={styles.iconStyle} source={accesoriesIcon} />
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.foodStyle}
					onPress={() => navigation.navigate('Food')}
				>
					<Image style={styles.iconStyle} source={foodIcon} />
				</TouchableOpacity>
            </View>
		</View>
	);
};
const styles = StyleSheet.create({
	logoStyle: {
		height: 255,
		width: 255,
		alignSelf: 'center',
	},
	questionStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		alignSelf: 'stretch',
	},
	iconStyle: {
		height: 100,
		width: 100,
		alignSelf: 'center',
		flexGrow: 1,
	},
	servicesStyle: {
		backgroundColor: 'rgba(159, 202, 226, 0.81)',
		borderRadius: 25,
		height: 150,
		width: 150,
		margin: 10,
		flexGrow: 1,
	},
	vetStyle: {
		height: 150,
		width: 150,
		backgroundColor: 'rgba(188,219,137,1)',
		borderRadius: 25,
		margin: 10,
		flexGrow: 1,
	},
	accesoriesStyle: {
		height: 150,
		width: 150,
		backgroundColor: 'rgba(255, 154, 162, 0.4);',
		borderRadius: 25,
		margin: 10,
		flexGrow: 1,
	},
	foodStyle: {
		height: 150,
		width: 150,
		backgroundColor: '#E8916C',
		borderRadius: 25,
		margin: 10,
		flexGrow: 1,
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		//flexWrap: 'wrap',
		//marginTop: 50,
		marginHorizontal: 20,
		flexGrow: 1,
	},
});
export default withNavigation(HomeScreen);
