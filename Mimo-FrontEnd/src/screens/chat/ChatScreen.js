import React from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useDispatch, useSelector } from 'react-redux';

ChatScreen.navigationOptions = screenProps => ({
	title: screenProps.navigation.getParam('name'),
});

export default function ChatScreen({ navigation }) {
	const dispatch = useDispatch();
	const selfUser = useSelector(state => state.selfUser);
	const conversations = useSelector(state => state.conversations);
	const userId = navigation.getParam('userId');
	const messages = conversations[userId].messages;

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
