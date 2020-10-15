import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../context/UserContext';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
	const mimoIcon = require('../../../assets/mimo.png');
	const vetIcon = require('../../../assets/mimoIconVeterinaria.png');
	const postIcon = require('../../../assets/mimoIconComida.png');
	const accesoriesIcon = require('../../../assets/mimoIconAccesorios.png');
	const servicesIcon = require('../../../assets/mimoIconServicios.png');

	const { getUser } = useContext(UserContext);

	useEffect(() => {
		getUser();
	}, []);

	return (
		<View style={{ backgroundColor: '#FFF7BB', flex: 1 }}>
			<View style={styles.parteSuperior}>
				<FontAwesome5 name="shopping-cart" size={40} color="black" />
				<Image style={styles.logoStyle} source={mimoIcon} />
				<MaterialIcons name="message" size={40} color="black" />

			</View>
			<Text style={styles.questionStyle}> ¿Qué buscas hoy? </Text>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.servicesStyle} onPress={() => navigation.navigate('Services')}>
					<Image style={styles.iconStyle} source={servicesIcon} />
					<Text style={styles.buttonNameStyle}>Servicios</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.vetStyle} onPress={() => navigation.navigate('Veterinaries')}>
					<Image style={styles.iconStyle} source={vetIcon} />
					<Text style={styles.buttonNameStyle}>Veterinaria</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.blogStyle} onPress={() => navigation.navigate('Product')}>
					<Image style={styles.iconStyle} source={accesoriesIcon} />
					<Text style={styles.buttonNameStyle}>Productos</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.postStyle} onPress={() => navigation.navigate('Post')}>
					<Image style={styles.iconStyle} source={postIcon} />
					<Text style={styles.buttonNameStyle}>Blogs</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({

	parteSuperior: {
		marginHorizontal: 20,
		flexDirection: 'row',
		marginTop: 50
	},

	logoStyle: {
		marginTop: 20,
		height: 210,
		width: 290,
		alignSelf: 'center',
	},
	questionStyle: {
		fontSize: 27,
		fontWeight: 'bold',
		marginLeft: 20,
		marginBottom: 5,
	},
	iconStyle: {
		height: 130,
		width: 170,
		alignSelf: 'center',
	},
	buttonNameStyle: {
		alignSelf: 'center',
		marginBottom: 15,
		fontSize: 23
	},
	servicesStyle: {
		backgroundColor: '#88CCF2',
		borderRadius: 25,
		marginRight: 10,
		flexGrow: 1,
	},
	vetStyle: {
		backgroundColor: '#B8DC7D',
		borderRadius: 25,
		marginLeft: 10,
		flexGrow: 1,
	},
	blogStyle: {
		backgroundColor: '#E8778B',
		borderRadius: 25,
		marginRight: 10,
		flexGrow: 1,
	},
	postStyle: {
		backgroundColor: '#7E9FD1',
		borderRadius: 25,
		marginLeft: 10,

		flexGrow: 1,
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 20,
		justifyContent: 'space-around',
		paddingHorizontal: 20,
	},
});
export default withNavigation(HomeScreen);
