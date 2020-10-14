import React, { useState, useContext } from 'react';
import { Context as PetContext } from '../../../context/PetContext';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const AddPetScreen = ({ navigation }) => {
	//funcion definida en PetContext.js, es un caso de PetReducer
	const { addPet } = useContext(PetContext);
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [type, setType] = useState('');

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<TextInput value={name} placeholder='name' onChangeText={text => setName(text)} />
			<TextInput value={age} placeholder='age' onChangeText={text => setAge(text)} />
			<TextInput value={gender} placeholder='gender' onChangeText={text => setGender(text)} />
			<TextInput value={type} placeholder='type' onChangeText={text => setType(text)} />
			<Button title='add ' onPress={() => addPet(name, age, gender, type)}></Button>
		</View>
	);
};

export default AddPetScreen;
