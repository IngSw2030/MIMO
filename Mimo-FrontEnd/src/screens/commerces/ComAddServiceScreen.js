import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as ServiceContext } from '../../context/ServiceContext';
import uploadPhoto from '../../hooks/uploadPhoto';
import { FontAwesome } from '@expo/vector-icons';
import { navigate } from '../../navigationRef';
import { Entypo } from '@expo/vector-icons';

const ComAddServiceScreen = ({ navigation }) => {
	const { saveService } = useContext(ServiceContext);

	const categoria = navigation.getParam('categoria');
	const [nombre, setNombre] = useState('');
	const [precioMax, setPrecioMax] = useState('');
	const [precioMin, setPrecioMin] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [foto, setFoto] = useState('');

	const [buscarImagen] = uploadPhoto();
	return (
		<ScrollView style={styles.pageStyle}>
			<View>
				<TouchableOpacity
					style={styles.inputImage}
					onPress={async () => {
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
				<Text style={styles.inputStyle}>{categoria}</Text>
			</View>
			<View style={styles.roundedContainerStyle}>
				<TextInput
					
					placeholder='Nombre'
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					value={nombre}
					onChangeText={newNombre => setNombre(newNombre)}
				/>
			</View>
			<View style={styles.roundedContainerStyle}>
				<TextInput
					keyboardType = {'numeric'}
					placeholder='Precio Minimo' 
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					value={precioMin}
					onChangeText={newPrecioMin => setPrecioMin(newPrecioMin)}
				/>
			</View>
			<View style={styles.roundedContainerStyle}>
				<TextInput
					keyboardType = {'numeric'}
					placeholder='Precio Máximo'
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					value={precioMax}
					onChangeText={newPrecioMax => setPrecioMax(newPrecioMax)}
				/>
			</View>
			<View style={styles.roundedContainerStyle}>
				<TextInput
					placeholder='Descripción'
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					value={descripcion}
					editable={true}
					multiline={true}
					onChangeText={newDescripcion => setDescripcion(newDescripcion)}
				/>
			</View>

			<View style={styles.finishButtons}>
				<TouchableOpacity
					style={styles.confirmButton}
					onPress={() => {
						const numberPriceMin = precioMin * 1;
						const numberPriceMax = precioMax * 1;
						saveService({
							category: categoria,
							name: nombre,
							priceMin: numberPriceMin,
							priceMax: numberPriceMax,
							photo: foto,
							description: descripcion,
						});
						console.log('Termina el save');
						navigate('ComService');
					}}
				>
					<Text style={styles.text}>Agregar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.cancelButton} onPress={() => navigate('ComService')}>
					<Text style={styles.text}>Cancelar</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	roundedContainerStyle: {
		backgroundColor: '#88CCF2',
        minHeight: 40,
        width: 350,
        borderRadius: 20,
		alignSelf: 'center',
		alignContent: 'center',
		margin: 10
	},
	inputStyle: {
		color: '#000',
		fontSize: 18,
		marginLeft: 15,
		alignSelf: 'center',
		textAlign: 'center',
        flexWrap: 'wrap',
        minHeight: 50,
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
		width: 370,
		height: 230,
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
		paddingBottom: 20,
		marginTop: 10
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
});

export default withNavigation(ComAddServiceScreen);
