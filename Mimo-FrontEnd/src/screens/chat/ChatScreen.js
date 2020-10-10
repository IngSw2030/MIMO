import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useDispatch, useSelector } from 'react-redux';

ChatScreen.navigationOptions = screenProps => ({
	title: screenProps.navigation.getParam('name'),
});

export default function ChatScreen({ navigation }) {
	const dispatch = useDispatch();
	const selfUser = useSelector(state => state.selfUser);
	const chatState = useSelector(state => state);

	const userId = navigation.getParam('userId');

	const messages = useSelector(state => state.conversations).find(
		thisConversation => thisConversation.conversationId === userId
	).messages;
	console.log('conversations en ChatScreen', messages);
	return (
		<View style={{ flex: 1 }}>
			<GiftedChat
				messages={messages}
				onSend={messages => {
					dispatch({
						/* Agrega localmente el mensaje */
						type: 'private_message',
						/* userId es el email del receptor */
						data: { message: messages[0], conversationId: userId },
					});
					dispatch({
						/* Manda el mensaje al servidor para enviarlo al receptor */
						type: 'server/private_message',
						/* userId es el email del receptor */
						data: { message: messages[0], conversationId: userId },
					});
				}}
				user={{
					//indica si es mensaje propio o de un emisor
					_id: selfUser.userId,
				}}
			/>
		</View>
	);
}
