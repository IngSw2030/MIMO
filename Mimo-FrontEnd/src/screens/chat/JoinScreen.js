import React, { useState } from 'react';
import { useContext } from 'react';
import { View, TextInput, Image, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { Context as UserContext } from '../../context/UserContext';

export default function JoinScreen({ navigation }) {
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const { state: user } = useContext(UserContext);
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Image resizeMode='contain' style={{ flex: 1 }} source={require('../../../assets/mimo.png')} />
			<View style={{ flex: 1, justifyContent: 'space-around' }}>
				<TextInput
					onChangeText={text => setUsername(text)}
					value={username}
					style={{ fontSize: 30, textAlign: 'center' }}
					placeholder='Enter username'
				/>
				<Button
					title='Join Chat'
					onPress={() => {
						dispatch({ type: 'server/setUser', data: user.email });
						dispatch({ type: 'server/join', data: user.name });
						navigation.navigate('FriendList');
					}}
				/>
			</View>
		</View>
	);
}
