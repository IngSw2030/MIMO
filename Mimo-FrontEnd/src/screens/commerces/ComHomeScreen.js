import React, { useContext, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../context/UserContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Context as PurchaseContext } from '../../context/PurchaseContext';
import { useDispatch } from 'react-redux';

const ComHomeScreen = ({ navigation }) => {
    const mimoIcon = require('../../../assets/mimo.png');
    const vetIcon = require('../../../assets/veterinaria.png');
    const foodIcon = require('../../../assets/blog.png');
    const accesoriesIcon = require('../../../assets/productos.png');
    const servicesIcon = require('../../../assets/servicios.png');
    const questionText = 'Administra tus:';
    const servicesText = 'Servicios';
    const vetText = 'Veterinaria';
    const accesoriesText = 'Productos';
    const foodText = 'Post';
    const dispatch = useDispatch();
    const { state: purchases, getMySells } = useContext(PurchaseContext);
    const { state: user } = useContext(UserContext);
    const { getUser } = useContext(UserContext);

	return (
		<View style={{ backgroundColor: '#FFF7BB', flex: 1 }}>
			<View style={styles.parteSuperior}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('ComNotifications');
					}}
				>
					<MaterialCommunityIcons name='point-of-sale' size={60} color='black' />
				</TouchableOpacity>
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
			<View style={styles.topBanner}>
				<View style={styles.infoStyle}>
					<Text style={{ fontWeight: 'bold', fontSize: 18 }}>Nombre: </Text>
					<Text style = {{fontSize: 18}}>{user.name} </Text>
					<Text style={{ fontWeight: 'bold', fontSize: 18 }}>Correo: </Text>
					<Text style = {{fontSize: 18}}>{user.email} </Text>
				</View>
				<Image style={styles.logoStyle} source={mimoIcon} />
			</View>

            <Text style={styles.questionStyle}> {questionText} </Text>
            <View style={styles.generalView}>
                <TouchableOpacity style={styles.servicesStyle} onPress={() => navigation.navigate('ComService')}>
                    <Image style={styles.iconStyle} source={servicesIcon} />
                    <Text style={styles.buttonNameStyle}>{servicesText}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.vetStyle} onPress={() => navigation.navigate('ComVeterinary')}>
                    <Image style={styles.iconStyle} source={vetIcon} />
                    <Text style={styles.buttonNameStyle}>{vetText}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.generalView}>
                {/*</TouchableOpacity>/<TouchableOpacity style={styles.blogStyle} onPress={() => navigation.navigate('ComeProduct')}>*/}
                <TouchableOpacity style={styles.blogStyle} onPress={() => navigation.navigate('ComProduct')}>
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
    topBanner: {
        flexDirection: 'row',
        // flex: 1
    },
    parteSuperior: {
        paddingHorizontal: '5%',
        flexDirection: 'row',
        paddingTop: '10%',
        flex: 0.6,
    },
    infoStyle: {
        alignSelf: 'center',
        flex: 1,
        marginLeft: 15,
    },
    questionStyle: {
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginBottom: 5,
        marginLeft: 15,
    },
    iconStyle: {
        marginTop: 10,
        height: 110,
        width: 110,
        alignSelf: 'center',
    },
    buttonNameStyle: {
        fontSize: 20,
        alignSelf: 'center',
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
        marginBottom: 10,
    },
});
export default withNavigation(ComHomeScreen);
