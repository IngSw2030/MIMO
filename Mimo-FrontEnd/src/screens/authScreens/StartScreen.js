import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StartScreen = ({ navigation }) => {
	return (
		<View>
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Text>Start Screen</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Join')}>
				<Text>Go to Chat</Text>
			</TouchableOpacity>
		</View>
	);
};

export default StartScreen;
