import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import {Context as ProductContext} from '../../context/ProductContext';
import uploadPhoto from '../../hooks/uploadPhoto';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { navigate } from '../../navigationRef';

const ComAddProductScreen = () => {

    const {saveProduct} = useContext(ProductContext);

    const [categoria, setCategoria] = useState('');
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [mascotas, setMascotas] = useState(['']);
    const [foto, setFoto] = useState('')

    const [buscarImagen] = uploadPhoto();



    return (
        <View>
            <View style={styles.roundedContainerStyle}>
                <TextInput
                    placeholder="Categoría"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={categoria}
                    onChangeText={(newCategoria) => setCategoria(newCategoria)}
                />
            </View>
            <View style={styles.roundedContainerStyle}>
                <TextInput
                    placeholder="Nombre"
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
                    placeholder="Precio"
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
                    placeholder="Descripción"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={descripcion}
                    onChangeText={(newDescripcion) => setDescripcion(newDescripcion)}
                />
            </View>

            <View style={styles.selectType}>
				<TouchableOpacity style={styles.type} onPress={() => setMascotas([...mascotas,'perro'])}>
					<MaterialCommunityIcons name='dog' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.type} onPress={() => setMascotas([...mascotas,'gato'])}>
					<MaterialCommunityIcons name='cat' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.type} onPress={() => setMascotas([...mascotas,'hamster'])}>
					<Text>Hamster</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.type} onPress={() => setMascotas([...mascotas,'pez'])}>
					<MaterialCommunityIcons name='fish' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.type} onPress={() => setMascotas([...mascotas,'conejo'])}>
					<MaterialCommunityIcons name='rabbit' size={50} color='black' />
				</TouchableOpacity>
			</View>

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
                        <FontAwesome name='camera' size={100} color='#D1D1D1' />
                    )}
                </TouchableOpacity>
            </View>
            
            <View style={{ flexDirection: 'row' }}>
				<View>
					<TouchableOpacity
						style={styles.buttom}
						onPress={() => {
                            const numberPrice = precio * 1;
							saveProduct({ 
                                category:categoria, 
                                name:nombre, 
                                price:numberPrice, 
                                photo:foto, 
                                description:descripcion, 
                                pets:mascotas
                            });
						}}
					>
						<Text style={styles.text}>Agregar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttom} onPress={() => navigate('Accesories')}>
						<Text style={styles.text}>Cancelar</Text>
					</TouchableOpacity>
				</View>
			</View>

        </View>
    );
}

const styles = StyleSheet.create({
    roundedContainerStyle: {
        marginTop: 30,
        marginLeft: 30,
        backgroundColor: "#B0EFEF",
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
		margin: 15,
		marginBottom: '5%',
    },
    selectType: {
		alignSelf: 'center',
		flexDirection: 'row',
	},
    iconsStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: 30,
		//marginLeft: '10%'
    },
    image: {
		width: 130,
		height: 130,
		borderRadius: 25,
		alignSelf: 'center',
		marginBottom: '5%',
    },
    buttom: {
		backgroundColor: '#DBAB9C',
		height: 50,
		width: 100,
		borderRadius: 25,
		marginLeft: '20%',
		marginBottom: '5%',
		marginTop: '15%',
    },
    text: {
		fontSize: 15,
		fontWeight: 'bold',
		alignSelf: 'center',
		margin: '15%',
		padding: 9,
	},
})

export default ComAddProductScreen