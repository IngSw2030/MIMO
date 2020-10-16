import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../context/UserContext';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
const HomeScreen = ({ navigation }) => {
	const mimoIcon = require('../../../assets/mimo.png');
	const vetIcon = require('../../../assets/mimoIconVeterinaria.png');
	const postIcon = require('../../../assets/mimoIconComida.png');
	const accesoriesIcon = require('../../../assets/mimoIconAccesorios.png');
	const servicesIcon = require('../../../assets/mimoIconServicios.png');
	const dispatch = useDispatch();
	const { state: user, getUser } = useContext(UserContext);

	useEffect(() => {
		getUser();
	}, []);

	return (
		<View style={{ backgroundColor: '#FFF7BB', flex: 1 }}>
			<View style={styles.parteSuperior}>
				<TouchableOpacity onPress={() => navigation.navigate('ShopingCart')}>
					<FontAwesome5 name='shopping-cart' size={40} color='black' />
				</TouchableOpacity>
				<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
					<Image style={styles.logoStyle} source={mimoIcon} />
				</View>
				<TouchableOpacity
					onPress={() => {
						dispatch({ type: 'server/setUser', data: user.email });
						dispatch({ type: 'server/join', data: user.name });
						navigation.navigate('FriendList');
					}}
				>
					<MaterialIcons name='message' size={40} color='black' />
				</TouchableOpacity>
			</View>
			<Text style={styles.questionStyle}> ¿Qué buscas hoy? </Text>

			<View style={styles.parteInferior}>
				<View style={styles.generalView}>
					<TouchableOpacity style={styles.servicesStyle} onPress={() => navigation.navigate('Product')}>
						<Image style={styles.iconStyleTop} source={servicesIcon} />
						<Text style={styles.buttonNameStyle}>Servicios</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.vetStyle} onPress={() => navigation.navigate('Veterinaries')}>
						<Image style={styles.iconStyleTop} source={vetIcon} />
						<Text style={styles.buttonNameStyle}>Veterinaria</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.generalView}>
					<TouchableOpacity style={styles.blogStyle} onPress={() => navigation.navigate('Product')}>
						<Image style={styles.iconStyleBot} source={accesoriesIcon} />
						<Text style={styles.buttonNameStyle}>Productos</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.postStyle} onPress={() => navigation.navigate('Post')}>
						<Image style={styles.iconStyleBot} source={postIcon} />
						<Text style={styles.buttonNameStyle}>Blogs</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	parteInferior: {
		flex: 1,
		justifyContent: 'space-around',
	},
	parteSuperior: {
		paddingHorizontal: '5%',
		flexDirection: 'row',
		paddingTop: '10%',
		flex: 0.65,

	},

	logoStyle: {
		height: 220,
		width: 220,
		alignSelf: 'center',
	},
	questionStyle: {
		fontSize: 27,
		fontWeight: 'bold',
		marginLeft: '5%',
		marginBottom: '2%',
	},
	iconStyleTop: {
		height: 150,
		width: 140,
		alignSelf: 'center',
	},
	iconStyleBot: {
		height: 150,
		width: 104,
		alignSelf: 'center',
		marginTop: 5
	},
	buttonNameStyle: {
		fontSize: 23,
		alignSelf: 'center',

	},
	servicesStyle: {
		backgroundColor: '#88CCF2',
		borderRadius: 25,
		marginRight: '2.5%',
		flex: 1,
		justifyContent: 'flex-start',
	},
	vetStyle: {
		backgroundColor: '#B8DC7D',
		borderRadius: 25,
		marginLeft: '2.5%',
		flex: 1,
	},
	blogStyle: {
		backgroundColor: '#E8778B',
		borderRadius: 25,
		marginRight: '2.5%',
		flex: 1,
	},
	postStyle: {
		backgroundColor: '#7E9FD1',
		borderRadius: 25,
		marginLeft: '2.5%',
		flex: 1,
	},
	generalView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: '5%',
		flex: 1,
		paddingBottom: '5%',

	},
});
export default withNavigation(HomeScreen);
