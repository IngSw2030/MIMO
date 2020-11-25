import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Context as ProductContext} from '../../context/ProductContext';
import uploadPhoto from '../../hooks/uploadPhoto';
import { Entypo } from '@expo/vector-icons';
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
    const [selectedValue, setSelectedValue] = useState("");

    const [buscarImagen] = uploadPhoto();



    return (
        <View style={styles.pageStyle}>
            <View>
                <TouchableOpacity style={styles.inputImage} onPress=
                    {async () => {
                        const imagen = await buscarImagen();
                        setFoto(imagen);
                    }}
                >
                    {foto ? (
                        <Image source={{ uri: `data:image/gif;base64,${foto}` }} style={styles.image} />
                    ) : (
                        <View style = {{alignSelf: 'center'}}>
                                <Entypo name="plus" size = {50} color = 'black'/>
                                <Entypo name="camera" size = {50} color = 'black'/>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
            <View style={styles.roundedContainerStyle}>
				<Picker itemStyle={styles.text} selectedValue={categoria} onValueChange={itemValue => setCategoria(itemValue)}>
					<Picker.Item label='Comida' value='comida' style={styles.pickerStyle}/>
					<Picker.Item label='Accesorios' value='accesorio' style={styles.pickerStyle} />
					<Picker.Item label='Limpieza' value='limpieza' style={styles.pickerStyle}/>
					<Picker.Item label='Otros' value='otros' style={styles.pickerStyle}/>
				</Picker>
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
				<TouchableOpacity style={[styles.type, {backgroundColor: '#9FCAE2'}]} onPress={() => setMascotas([...mascotas,'perro'])}>
					<MaterialCommunityIcons name='dog' size={65} color='black' style={{alignSelf: 'center'}}/>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.type, {backgroundColor: '#BCDB89'}]} onPress={() => setMascotas([...mascotas,'gato'])}>
					<MaterialCommunityIcons name='cat' size={65} color='black' style={{alignSelf: 'center'}}/>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.type, {backgroundColor: '#FF9AA2'}]} onPress={() => setMascotas([...mascotas,'pez'])}>
					<MaterialCommunityIcons name='fish' size={65} color='black' style={{alignSelf: 'center'}}/>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.type, {backgroundColor: '#E8916C'}]} onPress={() => setMascotas([...mascotas,'conejo'])}>
					<MaterialCommunityIcons name='rabbit' size={65} color='black' style={{alignSelf: 'center'}}/>
				</TouchableOpacity>
			</View>

            
            
            <View style={styles.finishButtons}>
					<TouchableOpacity
						style={styles.confirmButton}
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
                            navigate('ComProduct');
						}}
					>
						<Text style={styles.text}>Agregar</Text>
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
        backgroundColor: '#B0EFEF',
        minHeight: 40,
        width: 350,
        borderRadius: 20,
		alignSelf: 'center',
		alignContent: 'center',
		margin: 10
    },
    inputStyle: {
        color: "#000",
        fontSize: 18,
        marginLeft: 15,
        alignSelf: 'center'
    }, 
    type: {
		backgroundColor: '#9FCAE2',
		borderRadius: 35,
		height: 70,
		width: 70,
        alignSelf: 'center'
		//marginBottom: '5%',
    },
    selectType: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
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
        backgroundColor: '#FFF7BB',
    },
    pickerStyle: {
		alignSelf: "center"
    },
    
    inputImage:{
        backgroundColor: "#EEE096",
        height: 230,
        width: 370,
        borderRadius: 45,
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: '6%',
		margin: '3%'
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

export default withNavigation(ComAddProductScreen);