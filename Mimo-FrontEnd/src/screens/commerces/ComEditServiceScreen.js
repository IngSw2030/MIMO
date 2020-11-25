import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, Switch, TextInput, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as ServiceContext } from '../../context/ServiceContext';
import uploadPhoto from '../../hooks/uploadPhoto';
import { Entypo } from '@expo/vector-icons';
import { navigate } from '../../navigationRef';

const ComEditServiceScreen = ({ navigation }) => {
	const service = navigation.getParam('service');
	const { updateService } = useContext(ServiceContext);
	const { deleteService } = useContext(ServiceContext);
	
	console.log(service)
	
	const categoria = service.category;
	const [nombre, setNombre] = useState(service.name);
	const [precioMin, setPrecioMin] = useState(service.priceMin + '');
	const [precioMax, setPrecioMax] = useState(service.priceMax + '');
	const [descripcion, setDescripcion] = useState(service.description);
	const [foto, setFoto] = useState(service.photo);
	const [available, setAvailability] = useState(service.available);
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
					placeholder= {nombre}
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
					placeholder= {precioMin}
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType= 'numeric'
					style={styles.inputStyle}
					value={precioMin}
					onChangeText={newPrecioMin => setPrecioMin(newPrecioMin)}
				/>
			</View>
			<View style={styles.roundedContainerStyle}>
				<TextInput
					placeholder= {precioMax}
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType= 'numeric'
					style={styles.inputStyle}
					value={precioMax}
					onChangeText={newPrecioMax => setPrecioMax(newPrecioMax)}
				/>
			</View>
			<View style={styles.roundedContainerStyle}>
				<TextInput
					placeholder={descripcion}
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					value={descripcion}
					onChangeText={newDescripcion => setDescripcion(newDescripcion)}
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
						const numberPriceMin = precioMin * 1;
						const numberPriceMax = precioMax * 1;
						updateService({
							name:nombre, 
							priceMin: numberPriceMin,
							priceMax: numberPriceMax, 
							photo:foto, 
							description:descripcion,
							available: available,
							id: service._id,
						});
						navigate('ComService');
					}}
				>
					<Text style={styles.text}>Actualizar</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.cancelButton} 
					onPress={() => navigate('ComService')}>
					<Text style={styles.text}>Cancelar</Text>
				</TouchableOpacity>	
			</View>
			<TouchableOpacity 
				style={styles.buttom} 	
				onPress={() => {
					console.log(service._id);
					deleteService({
						id: service._id
					});
					navigate('ComService');
				}}
			>
				<Text style={styles.text}>Eliminar Servicio</Text>
			</TouchableOpacity>
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
		textAlignVertical:'center'
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
		height:230,
		width: 370,
		alignSelf: 'center',
		borderRadius: 50,
		margin: 10
	},
	buttom: {
		backgroundColor: '#E8778B',
		height: 50,
		width: 200,
		borderRadius: 25,
		marginBottom: '4%',
		alignSelf: 'center',
		alignContent: 'center',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
		padding: 9,
	},
	switchView:{
        alignSelf:"center",
        height: 70,
        flexDirection: "row"
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
		backgroundColor: '#BAA0F2',
		height: 50,
		width: 150,
		borderRadius: 25,
		justifyContent:'center'
    },
});

export default withNavigation(ComEditServiceScreen);
