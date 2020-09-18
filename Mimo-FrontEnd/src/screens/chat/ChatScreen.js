import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TextInput } from 'react-native';
import io from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';
const ChatScreen = () => {
	const socket = useRef(null);
	const [recvMessages, setRecvMessages] = useState([]);

	//same as componentWillMount
	useEffect(() => {
		socket.current = io('http://192.168.0.10:3001');
		socket.current.on('message', message => {
			setRecvMessages(prevState => GiftedChat.append(prevState, message));
		});
	}, []);

	const onSend = messages => {
		socket.current.emit('message', messages[0].text);
		setRecvMessages(prevState => GiftedChat.append(prevState, messages));
	};

	/* const textOfRecvMessages = recvMessages.map(msg => (
		<Text key={msg}>{msg}</Text>
	)); */
	return (
		<View style={{ flex: 1 }}>
			<GiftedChat
				messages={recvMessages}
				onSend={messages => onSend(messages)}
				user={{
					_id: 1,
				}}
			/>
		</View>
	);
};
export default ChatScreen;
