import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../context/UserContext';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
const HomeScreen = ({ navigation }) => {
	const mimoIcon = require('../../../assets/mimo.png');
	const vetIcon = require('../../../assets/veterinaria.png');
	const postIcon = require('../../../assets/blog.png');
	const accesoriesIcon = require('../../../assets/productos.png');
	const servicesIcon = require('../../../assets/servicios.png');
	const dispatch = useDispatch();
	const { state: user, getUser } = useContext(UserContext);

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
					<TouchableOpacity style={styles.servicesStyle} onPress={() => navigation.navigate('Services')}>
						<Image style={{ height: 130, width: 130, alignSelf: 'center' }} source={servicesIcon} />
						<Text style={styles.buttonNameStyle}>Servicios</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.vetStyle} onPress={() => navigation.navigate('Veterinaries')}>
						<Image style={{ height: 130, width: 130, alignSelf: 'center' }} source={vetIcon} />
						<Text style={styles.buttonNameStyle}>Veterinaria</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.generalView}>
					<TouchableOpacity style={styles.blogStyle} onPress={() => navigation.navigate('Product')}>
						<Image style={{ height: 130, width: 130, alignSelf: 'center' }} source={accesoriesIcon} />
						<Text style={styles.buttonNameStyle}>Productos</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.postStyle} onPress={() => navigation.navigate('Post')}>
						<Image style={{ height: 130, width: 130, alignSelf: 'center' }} source={postIcon} />
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
	buttonNameStyle: {
		fontSize: 20,
		alignSelf: 'center',

	},
	servicesStyle: {
		backgroundColor: '#88CCF2',
		borderRadius: 25,
		marginRight: '2.5%',
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
	},
	vetStyle: {
		backgroundColor: '#B8DC7D',
		borderRadius: 25,
		marginLeft: '2.5%',
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
	},
	blogStyle: {
		backgroundColor: '#E8778B',
		borderRadius: 25,
		marginRight: '2.5%',
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
	},
	postStyle: {
		backgroundColor: '#7E9FD1',
		borderRadius: 25,
		marginLeft: '2.5%',
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'column',
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
