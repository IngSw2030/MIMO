import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, Switch, TextInput, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as ServiceContext } from '../../context/ServiceContext';
import uploadPhoto from '../../hooks/uploadPhoto';
import { FontAwesome } from '@expo/vector-icons';
import { navigate } from '../../navigationRef';

const ComEditServiceScreen = ({ navigation }) => {
	const service = navigation.getParam('service');
	const { updateService } = useContext(ServiceContext);
	const { deleteService } = useContext(ServiceContext);
	
	
	const categoria = service.category;
	const [nombre, setNombre] = useState(service.name);
	const [precio, setPrecio] = useState(service.price + '');
	const [descripcion, setDescripcion] = useState(service.description);
	const [foto, setFoto] = useState(service.photo);
	const [available, setAvailability] = useState(service.available);
	const [buscarImagen] = uploadPhoto();

	return (
		<View style={styles.pageStyle}>
			<View>
				<TouchableOpacity
					style={styles.iconsStyle}
					onPress={async () => {
						const imagen = await buscarImagen();
						setFoto(imagen);
					}}
				>
					{foto ? (
						<Image source={{ uri: `data:image/gif;base64,${foto}` }} style={styles.image} />
					) : (
						<FontAwesome name='camera' size={130} color='#000000' style={{ marginLeft: '20%' }} />
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
					placeholder= {precio}
					placeholderTextColor='#000'
					autoCapitalize='none'
					autoCorrect={false}
					style={styles.inputStyle}
					value={precio}
					onChangeText={newPrecio => setPrecio(newPrecio)}
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
                    trackColor ={{true: 'blue'}}
                />
            </View> 
			<ScrollView>
				<View style={{ flexDirection: 'row' }}>
					<View>
						<TouchableOpacity
							style={styles.buttom}
							onPress={() => {
								const numberPrice = precio * 1;
								updateService({
									name:nombre, 
									price: numberPrice, 
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
							style={styles.buttom} 
							onPress={() => navigate('ComService')}>
							<Text style={styles.text}>Cancelar</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={styles.buttom} 	
							onPress={() => {
								deleteService({
									id: service._id
								});
								navigate('ComService');
							}}
						>
							<Text style={styles.text}>Eliminar Servicio</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	roundedContainerStyle: {
		marginTop: 10,
		marginLeft: 30,
		backgroundColor: '#88CCF2',
		height: 42,
		width: 320,
		borderRadius: 75,
		justifyContent: 'center',
	},
	inputStyle: {
		color: '#000',
		fontSize: 18,
		marginLeft: 15,
		alignSelf: 'center',
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
		width: 200,
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
	switchView:{
        alignSelf:"center",
        height: 70,
        flexDirection: "row"
    },
	pageStyle: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#EDDF98',
	},
});

export default withNavigation(ComEditServiceScreen);
