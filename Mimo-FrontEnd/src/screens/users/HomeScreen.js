import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../context/UserContext';

const HomeScreen = ({ navigation }) => {
	const mimoIcon = require('../../../assets/mimo.png');
	const vetIcon = require('../../../assets/mimoIconVeterinaria.png');
	const postIcon = require('../../../assets/mimoIconComida.png');
	const accesoriesIcon = require('../../../assets/mimoIconAccesorios.png');
	const servicesIcon = require('../../../assets/mimoIconServicios.png');
	const questionText = '¿Qué buscas hoy?';
	const servicesText = 'Servicios';
	const vetText = 'Veterinaria';
	const accesoriesText = 'Productos';
	const postText = 'Post';

	const { getUser } = useContext(UserContext);

	useEffect(() => {
		getUser();
	}, []);

	return (
		<View style={{ backgroundColor: '#FFF7BB', flex: 1 }}>
			<View>
				<Image style={styles.logoStyle} source={mimoIcon} />
				<Text style={styles.questionStyle}> {questionText} </Text>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.servicesStyle} onPress={() => navigation.navigate('Services')}>
					<Image style={styles.iconStyle} source={servicesIcon} />
					<Text style={styles.buttonNameStyle}>{servicesText}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.vetStyle} onPress={() => navigation.navigate('Veterinaries')}>
					<Image style={styles.iconStyle} source={vetIcon} />
					<Text style={styles.buttonNameStyle}>{vetText}</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.blogStyle} onPress={() => navigation.navigate('Product')}>
					<Image style={styles.iconStyle} source={accesoriesIcon} />
					<Text style={styles.buttonNameStyle}>{accesoriesText}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.postStyle} onPress={() => navigation.navigate('Post')}>
					<Image style={styles.iconStyle} source={postIcon} />
					<Text style={styles.buttonNameStyle}>{postText}</Text>
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
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		marginBottom: 5,
	},
	iconStyle: {
		height: 100,
		width: 100,
		alignSelf: 'center',
		flexGrow: 1,
	},
	buttonNameStyle: {
		alignSelf: 'center',
		marginBottom: 10,
	},
	servicesStyle: {
		backgroundColor: '#88CCF2',
		borderRadius: 25,
		height: 150,
		width: 150,
		marginLeft: 10,
		marginRight: 10,
		flexGrow: 1,
	},
	vetStyle: {
		height: 150,
		width: 150,
		backgroundColor: '#B8DC7D',
		borderRadius: 25,
		marginRight: 10,
		flexGrow: 1,
	},
	blogStyle: {
		height: 150,
		width: 150,
		backgroundColor: '#E8778B',
		borderRadius: 25,
		marginLeft: 10,
		marginRight: 10,
		flexGrow: 1,
	},
	postStyle: {
		height: 150,
		width: 150,
		backgroundColor: '#7E9FD1',
		borderRadius: 25,
		marginRight: 10,
		flexGrow: 1,
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
	},
});
export default withNavigation(HomeScreen);
