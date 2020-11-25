import React, { useState, useContext, useEffect } from 'react';
import { Context as PostContext } from '../../../context/PostContext';
import { View, Text, Image, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import uploadPhoto from '../../../hooks/uploadPhoto';
import { Entypo } from '@expo/vector-icons';

const AddPostScreen = ({ navigation }) => {
	const { savePost, myPosts } = useContext(PostContext);
	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [tags, setTags] = useState(['']);
	const [foto, setFoto] = useState('')
	const [buscarImagen] = uploadPhoto();
	
	const aracnido = require( '../../../../assets/aracnido.png');
    const ave = require( '../../../../assets/ave.png');
    const caracol = require( '../../../../assets/caracol.png');
    const crustaceo = require( '../../../../assets/crustaceo.png');
    const hamster = require( '../../../../assets/hamster.png');
    const serpiente = require( '../../../../assets/serpiente.png');
    const tortuga = require( '../../../../assets/tortuga.png');
    const perro = require( '../../../../assets/perro.png');
    const gato = require( '../../../../assets/gato.png');
    const pez = require( '../../../../assets/pez.png');
    const conejo = require( '../../../../assets/conejo.png');

	return (
		<ScrollView style={styles.general}>
			<Text style = {styles.titles}>Crea tu Post</Text>
			<View style = {styles.inputTitle}>
				<TextInput 
					placeholder="Escribe tu título aquí"
					placeholderTextColor="#000"
					style={styles.inputTitleText}
					value={titulo}
					onChangeText={(newTitulo) => setTitulo(newTitulo)}
				/>
			</View>
			<View style = {styles.inputImage}>
				<TouchableOpacity style={styles.iconsStyle} onPress={async () => {
                        const imagen = await buscarImagen();
                        setFoto(imagen);
                    }}>
					{foto ? (
						<Image source={{ uri: `data:image/gif;base64,${foto}` }} style={styles.image}/>
					) : (
						<View style = {styles.phStyle}>
							<Entypo name="plus" size = {50} color = 'black'/>
							<Entypo name="camera" size = {50} color = 'black'/>
						</View>
					)}
				</TouchableOpacity>
			</View>
			<View style = {styles.inputContent}>
				<TextInput 
					placeholder="Escribe tu contenido aquí"
					placeholderTextColor="#000"
					style={styles.inputContentText}
					value={descripcion}
					multiline={true}
					onChangeText={(newDescripcion) => setDescripcion(newDescripcion)}
				/>
			</View>
			<View style={styles.selectType}>
				<ScrollView horizontal = {true}>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#9FCAE2'}]} onPress={() => setTags([...tags,'perro'])}>
						<Image source={perro} style={{alignSelf: 'center', height: 70, width: 70}} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#BCDB89'}]} onPress={() => setTags([...tags,'gato'])}>
						<Image source={gato} style={{alignSelf: 'center', height: 70, width: 70}} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#FF9AA2'}]} onPress={() => setTags([...tags,'pez'])}>
						<Image source={pez} style={{alignSelf: 'center', height: 70, width: 70}} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#E8916C'}]} onPress={() => setTags([...tags,'conejo'])}>
						<Image source={conejo} style={{alignSelf: 'center', height: 70, width: 70}} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#9FCAE2'}]} onPress={() => setTags([...tags,'hamster'])}>
						<Image source={hamster} style={{alignSelf: 'center', height: 70, width: 70}} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#BCDB89'}]} onPress={() => setTags([...tags,'aracnido'])}>
						<Image source={aracnido} style={{alignSelf: 'center', height: 70, width: 70}} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#FF9AA2'}]} onPress={() => setTags([...tags,'ave'])}>
						<Image source={ave} style={{alignSelf: 'center', height: 65, width: 65}} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#E8916C'}]} onPress={() => setTags([...tags,'caracol'])}>
						<Image source={caracol} style={{alignSelf: 'center', height: 70, width: 70}} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#9FCAE2'}]} onPress={() => setTags([...tags,'crustaceo'])}>
						<Image source={crustaceo} style={{alignSelf: 'center', height: 70, width: 70}} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#BCDB89'}]} onPress={() => setTags([...tags,'serpiente'])}>
						<Image source={serpiente} style={{alignSelf: 'center', height: 70, width: 70}} />
					</TouchableOpacity>
					<TouchableOpacity style={[styles.type, {backgroundColor: '#FF9AA2'}]} onPress={() => setTags([...tags,'tortuga'])}>
						<Image source={tortuga} style={{alignSelf: 'center', height: 60, width: 60}} />
					</TouchableOpacity>
                    
                </ScrollView>
			</View>
			<View style={styles.finishButtons}>
				<TouchableOpacity
					style={styles.confirmButton}
					onPress={() => {
						savePost({ 
							photo: foto,
							title: titulo,
							content: descripcion,
							tags: tags
						});
						myPosts();
						navigation.navigate('Post');
					}}
				>
					<Text style={styles.text}>Agregar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.cancelButton} onPress={() => navigate('Post')}>
					<Text style={styles.text}>Cancelar</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	general: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF7BB',
	},
	titles: {
		fontSize:32,
		fontWeight: 'bold',
		paddingTop: 20,
		paddingHorizontal: 20
	},
	inputTitle:{
        backgroundColor: "#EEE096",
        height: 50,
        width: 380,
        borderRadius: 75,
		alignSelf: 'center',
		flexDirection: 'row',
		alignContent: 'center',
		marginVertical: 10
	},
	inputTitleText:{
		justifyContent: 'flex-start',
		paddingHorizontal: 8,
		fontSize: 22,
		fontWeight:'600',
		flexWrap: 'wrap'
	},
	inputContent:{
        backgroundColor: "#EEE096",
        height: 280,
        width: 380,
        borderRadius: 45,
		alignSelf: 'center',
		marginVertical: 10
	},
	inputContentText:{
		justifyContent: 'flex-start',
		fontSize: 16,
		margin: 15,
		textAlignVertical: 'top'
	},
	inputImage:{
        backgroundColor: "#EEE096",
        height: 200,
        width: 380,
        borderRadius: 45,
		alignSelf: 'center',
		justifyContent: 'center',
		marginVertical: 10
	},
	image: {
		//resizeMode: 'contain',
		//maxWidth: Dimensions.get('window').width,
		height:200,
		width: 380,
		alignSelf: 'center',
		borderRadius: 50,
		margin: 10
	},
	phStyle: {
        alignSelf: 'center'
	},
	type: {
		backgroundColor: '#9FCAE2',
		borderRadius: 35,
		height: 70,
		width: 70,
		alignSelf: 'center',
		margin: 5
	},
    selectType: {
		alignSelf: 'center',
		flexDirection: 'row',
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
    text: {
		fontSize: 15,
		fontWeight: 'bold',
		alignSelf: 'center',
		margin: '15%',
		padding: 9,
		alignSelf: 'center'
	},
});

export default withNavigation(AddPostScreen);
