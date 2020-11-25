import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Switch } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Context as ProductContext} from '../../context/ProductContext';
import uploadPhoto from '../../hooks/uploadPhoto';
import { navigate } from '../../navigationRef';

const ComEditProductScreen = ({navigation}) => {
    const product= navigation.getParam('product');
    const {updateProduct} = useContext(ProductContext);
    const [precio, setPrecio] = useState(product.price + '');
    const [available, setAvailability] = useState(product.available)
    const [nombre, setNombre] = useState(product.name);
    const [descripcion, setDescripcion] = useState(product.description);
    const [foto, setFoto] = useState(product.photo);
    const [buscarImagen] = uploadPhoto();

    return (
        <View style={styles.pageStyle}>
            <View>
                <TouchableOpacity style={styles.iconsStyle} onPress=
                    {async () => {
                        const imagen = await buscarImagen();
                        setFoto(imagen);
                    }}
                >
                    {foto ? (
                        <Image source={{ uri: `data:image/gif;base64,${foto}` }} style={styles.image} />
                    ) : (
                        <Image source={{ uri: `data:image/gif;base64,${product.photo}` }} style={styles.image}/>
                    )}
                </TouchableOpacity>
            </View>
            <View style={styles.roundedContainerStyle}>
                <TextInput
                    placeholder={product.name}
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={nombre}
                    onChangeText={(newNombre) => setNombre(newNombre)}
                />
            </View>
            <View style={styles.roundedContainerStyle}>
                <TextInput
                    placeholder={precio}
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={precio}
                    onChangeText={(newPrecio) => setPrecio(newPrecio)}
                />
            </View>
            <View style={styles.roundedContainerStyle}>
                <TextInput
                    placeholder={product.description}
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={descripcion}
                    onChangeText={(newDescripcion) => setDescripcion(newDescripcion)}
                />
            </View>
            
            <View style={styles.switchView}>
                <Text style={styles.text}>
                    Disponible:
                </Text>
                <Switch
                    size="normal" 
                    value={available}
                    onValueChange={(value)=>setAvailability(value)}
                    trackColor ={{true: "#BCDB89"}}
                />
            </View>   
            
            <View style={styles.finishButtons}>
					<TouchableOpacity
                        style={styles.confirmButton}
						onPress={() => {
                            console.log(available);
                            const numberPrice = precio * 1;
							updateProduct({ 
                                name:nombre, 
                                price: numberPrice, 
                                photo:foto, 
                                description:descripcion,
                                available: available,
                                id: product._id,

                            });
                            navigate('ComProduct');
						}}
					>
						<Text style={styles.text}>Aceptar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cancelButton} onPress={() => navigate('ComProduct')}>
						<Text style={styles.text}>Cancelar</Text>
					</TouchableOpacity>
			</View>
        </View>
    );
}

const styles = StyleSheet.create({
    roundedContainerStyle: {
        marginTop: 10,
        marginLeft: 30,
        backgroundColor: "#88CCF2",
        height: 42,
        width: 320,
        borderRadius: 75,
        justifyContent: 'center'
    },
    inputStyle: {
        color: "#000",
        fontSize: 18,
        marginLeft: 15,
        alignSelf: 'center'
    }, 
    type: {
		backgroundColor: '#9FCAE2',
		borderRadius: 25,
		height: 50,
		width: 50,
		margin: 10,
		//marginBottom: '5%',
    },
    selectType: {
		alignSelf: 'center',
		flexDirection: 'row',
	},
    iconsStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
        marginTop: 30,
        height: 300,
		width: 300,
		//marginLeft: '25%'
    },
    image: {
		width: 300,
		height: 300,
		borderRadius: 25,
		alignSelf: 'center',
    },
    buttom: {
		backgroundColor: '#DBAB9C',
		height: 50,
		width: 130,
		borderRadius: 25,
		marginLeft: '20%',
		marginTop: '2%',
    },
    text: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		padding: 9,
    },
    pageStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF7BB',
    },
    switchView:{
        alignSelf:"center",
        height: 100,
        flexDirection: "row"
    },
    finishButtons:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		marginHorizontal: 30,
		paddingBottom: 20
	},
	confirmButton: {
		backgroundColor: '#98E568',
		height: 50,
		width: 150,
		borderRadius: 25,
		justifyContent:'center'
	},
	cancelButton: {
		backgroundColor: '#E8778B',
		height: 50,
		width: 150,
		borderRadius: 25,
		justifyContent:'center'
    },
})

export default withNavigation(ComEditProductScreen);