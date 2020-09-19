import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const ServicesScreen = ({navigation}) => {
    const mimoIcon = require('../../../../assets/mimo.png');
	const mimoEstilista = require('../../../../assets/mimoEstilista.png');
	
    return (
        <View style={({ flexGrow: 2 }, { backgroundColor: '#EDDF98' })}>
			<View>
				<Image style={styles.logoStyle} source={mimoIcon} />
				<Text style={styles.textStyle}> Servicios </Text>
			</View>
			<View style={styles.generalView}>
				<TouchableOpacity
					style={styles.buttonStyle}
				>
					<Image style={styles.iconStyle} source={mimoIcon} />
                    <Text style={styles.textStyle2}> Limpieza de pecera</Text>
				</TouchableOpacity>

				<TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('PetWalker')}
				>
					<Image style={styles.iconStyle} source={mimoIcon} />
                    <Text style={styles.textStyle2}> Paseos</Text>
				</TouchableOpacity>
			</View>
            <View style={styles.generalView}>
            <TouchableOpacity
					style={styles.buttonStyle}
				>
					<Image style={styles.iconStyle} source={mimoEstilista} />
                    <Text style={styles.textStyle2}> Estilista</Text>
				</TouchableOpacity>

				<TouchableOpacity
                    style={styles.buttonStyle}
				>
					<Image style={styles.iconStyle} source={mimoIcon} />
                    <Text style={styles.textStyle2}> Cuidadores</Text>
				</TouchableOpacity>
            </View>
		</View>
    )
}
const styles = StyleSheet.create({
	logoStyle: {
		height: 255,
		width: 255,
		alignSelf: 'center',
	},
	textStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		alignSelf: 'stretch',
    },
    textStyle2: {
		alignSelf: 'center',
	},
	iconStyle: {
		height: 120,
		width: 120,
		alignSelf: 'center',
		//flexGrow: 1,
	},
	buttonStyle: {
		backgroundColor: 'rgba(159, 202, 226, 0.89)',
		borderRadius: 25,
		height: 150,
		width: 150,
		margin: 10,
		flexDirection: 'column'
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
		flexGrow: 1,
    },
    
});
export default ServicesScreen