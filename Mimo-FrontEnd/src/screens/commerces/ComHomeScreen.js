import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../context/UserContext';

const ComHomeScreen = ({navigation}) => {
    const mimoIcon = require('../../../assets/mimo.png');
	const vetIcon = require('../../../assets/mimoIconVeterinaria.png');
	const foodIcon = require('../../../assets/mimoIconComida.png');
	const accesoriesIcon = require('../../../assets/mimoIconAccesorios.png');
	const servicesIcon = require('../../../assets/mimoIconServicios.png');
	const questionText = 'Administrar';
	const servicesText = 'Servicios';
	const vetText = 'Veterinaria';
	const accesoriesText = 'Productos';
	const foodText = 'Post';

	const { getUser } = useContext(UserContext);
	useEffect(() => {
		getUser();
    }, []);
    const {state} = useContext(UserContext);
    return (
		<View style={{ backgroundColor: '#FFF7BB', flex: 1 }}>
			<View style={styles.topBanner}>
                <View style= {styles.infoStyle}>
                    <Text style={{fontWeight: "bold"}}>Nombre: </Text><Text>{state.name} </Text>
                    <Text style={{fontWeight: "bold"}}>Correo: </Text><Text>{state.email} </Text>
                </View>
				<Image style={styles.logoStyle} source={mimoIcon} />
				
			</View>
            <Text style={styles.questionStyle}> {questionText} </Text>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.servicesStyle} onPress={() => navigation.navigate('ComeService')}>
					<Image style={styles.iconStyle} source={servicesIcon} />
					<Text style={styles.buttonNameStyle}>{servicesText}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.vetStyle} onPress={() => navigation.navigate('ComeVet')}>
					<Image style={styles.iconStyle} source={vetIcon} />
					<Text style={styles.buttonNameStyle}>{vetText}</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity style={styles.blogStyle} onPress={() => navigation.navigate('ComeProduct')}>
					<Image style={styles.iconStyle} source={accesoriesIcon} />
					<Text style={styles.buttonNameStyle}>{accesoriesText}</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.foodStyle} onPress={() => navigation.navigate('Post')}>
					<Image style={styles.iconStyle} source={foodIcon} />
					<Text style={styles.buttonNameStyle}>{foodText}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	logoStyle: {
		height: 170,
		width: 170,
		alignSelf: 'center',
    },
    topBanner:{
        flexDirection:'row',
        flex: 1

    },
    infoStyle:{
        alignSelf: 'center',
        flex: 1,
        marginLeft: 15
    },
	questionStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'flex-start',
        marginBottom: 5,
        marginLeft:15
	},
	iconStyle: {
		height: 100,
		width: 100,
		alignSelf: 'center',
		flexGrow: 1,
	},
	buttonNameStyle: {
		alignSelf: 'center',
		marginBottom: 10
	},
	servicesStyle: {
		backgroundColor: '#88CCF2',
		borderRadius: 25,
		height: 150,
		width: 150,
		marginLeft:10,
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
	foodStyle: {
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
        marginBottom: 10
	},
});
export default withNavigation(ComHomeScreen);