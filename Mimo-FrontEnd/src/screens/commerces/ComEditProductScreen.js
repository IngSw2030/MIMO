import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Switch } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Context as ProductContext} from '../../context/ProductContext';
import uploadPhoto from '../../hooks/uploadPhoto';
import usePrice from '../../hooks/usePrice';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
                    trackColor ={{true: 'blue'}}
                />
            </View>   
            
            <View style={{ flexDirection: 'row' }}>
				<View>
					<TouchableOpacity
                        style={styles.buttom}
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
					<TouchableOpacity style={styles.buttom} onPress={() => navigate('ComProduct')}>
						<Text style={styles.text}>Cancelar</Text>
					</TouchableOpacity>
				</View>
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
        height: 200,
		width: 200,
		//marginLeft: '25%'
    },
    image: {
		width: 200,
		height: 200,
		borderRadius: 25,
		alignSelf: 'center',
		marginBottom: '5%',
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
        backgroundColor: '#EDDF98',
    },
    switchView:{
        alignSelf:"center",
        height: 100,
        flexDirection: "row"
    }
})

export default withNavigation(ComEditProductScreen);