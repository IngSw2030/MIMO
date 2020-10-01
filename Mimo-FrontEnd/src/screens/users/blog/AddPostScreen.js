import React, { useState, useContext, useEffect } from 'react';
import { Context as PostContext } from '../../../context/PostContext';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
const AddPostScreen = ({ navigation }) => {
	const { addPost } = useContext(PostContext);
	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [imagen, setImagen] = useState('');
	const [tags, setTags] = useState([]);
	const [currentTag, setCurrentTag] = useState('');

	const addTags = currentTag => {
		setTags([...tags, currentTag]);
		setCurrentTag('');
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<TextInput value={titulo} placeholder='titulo' onChangeText={text => setTitulo(text)} />
			<TextInput value={descripcion} placeholder='descripcion' onChangeText={text => setDescripcion(text)} />
			<TextInput value={imagen} placeholder='imagen' onChangeText={text => setImagen(text)} />
			<View style={{ flexDirection: 'row', borderRadius: 5, borderColor: 'black', borderWidth: 5, padding: 5 }}>
				<TextInput value={currentTag} placeholder='tags' onChangeText={text => setCurrentTag(text)} />
				<Button title='add tag' onPress={() => addTags(currentTag)} />
			</View>

			<Text>Tags: {tags}</Text>
			<Button
				title='add '
				onPress={() => addPost(titulo, descripcion, imagen, tags, () => navigation.navigate('Post'))}
			></Button>
		</View>
	);
};

export default AddPostScreen;
