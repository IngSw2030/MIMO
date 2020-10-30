import React, { useState, useContext, useEffect } from 'react';
import { Context as PostContext } from '../../../context/PostContext';
import { View, Text, Image, Button, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import uploadPhoto from '../../../hooks/uploadPhoto';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AddPostScreen = ({ navigation }) => {
	const { savePost, myPosts } = useContext(PostContext);
	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [tags, setTags] = useState(['']);
	const [foto, setFoto] = useState('')
	const [buscarImagen] = uploadPhoto();

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
				<TouchableOpacity style={styles.typeDog} onPress={() => setTags([...tags,'perro'])}>
					<MaterialCommunityIcons name='dog' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.typeCat} onPress={() => setTags([...tags,'gato'])}>
					<MaterialCommunityIcons name='cat' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.typeFish} onPress={() => setTags([...tags,'pez'])}>
					<MaterialCommunityIcons name='fish' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.typeRabbit} onPress={() => setTags([...tags,'conejo'])}>
					<MaterialCommunityIcons name='rabbit' size={50} color='black' />
				</TouchableOpacity>
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
	typeDog: {
		backgroundColor: '#9FCAE2',
		borderRadius: 30,
		height: 60,
		width: 60,
		margin: 15,
		marginBottom: '5%',
		alignItems: 'center'
	},
	typeCat: {
		backgroundColor: '#BCDB89',
		borderRadius: 30,
		height: 60,
		width: 60,
		margin: 15,
		marginBottom: '5%',
		alignItems: 'center'
	},
	typeFish: {
		backgroundColor: '#FFAFB6',
		borderRadius: 30,
		height: 60,
		width: 60,
		margin: 15,
		marginBottom: '5%',
		alignItems: 'center'
	},
	typeRabbit: {
		backgroundColor: '#E8916C',
		borderRadius: 30,
		height: 60,
		width: 60,
		margin: 15,
		marginBottom: '5%',
		alignItems: 'center'
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
		backgroundColor: '#E8916C',
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
