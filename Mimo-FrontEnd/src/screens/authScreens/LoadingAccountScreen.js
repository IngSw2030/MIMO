import React from 'react';
import { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context as UserContext } from '../../context/UserContext';
import { useEffect } from 'react';
import { navigate } from '../../navigationRef';
import { withNavigation } from 'react-navigation';
const LoadingAccountScreen = ({ navigation }) => {
	// const { getPosts } = useContext(PostContext);
	const { state: user } = useContext(UserContext);
	// const { getPet } = useContext(PetContext);

	useEffect(() => {
		user.tipo === false ?
        navigation.navigate('UserProfile')
        : navigation.navigate('UserProfile') //Cuando se tenga lista la pantalla de ComSettings acá se pone
	}, [user]); // Or [] if effect doesn't need props or state

	return (
		<View>
			<Text>Pantalla de Loading Account</Text>
		</View>
	);
};

export default withNavigation(LoadingAccountScreen);
