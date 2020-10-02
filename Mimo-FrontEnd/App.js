//redux y sockets
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import AppContainer from './AppContainer';
import { setNavigator } from './src/navigationRef';
//contextos
import { Provider as PetProvider } from './src/context/PetContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as UserProvider } from './src/context/UserContext';

const socket = io('http://192.168.0.10:3001');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

function reducer(state = { conversations: {} }, action) {
	switch (action.type) {
		case 'users_online':
			const conversations = { ...state.conversations };
			const usersOnline = action.data;
			for (let i = 0; i < usersOnline.length; i++) {
				const userId = usersOnline[i].userId;
				if (conversations[userId] === undefined) {
					conversations[userId] = {
						messages: [],
						username: usersOnline[i].username,
					};
				}
			}
			return { ...state, usersOnline, conversations };
		case 'private_message':
			const conversationId = action.data.conversationId;
			return {
				...state,
				conversations: {
					...state.conversations,
					[conversationId]: {
						...state.conversations[conversationId],
						messages: [action.data.message, ...state.conversations[conversationId].messages],
					},
				},
			};
		case 'self_user':
			return { ...state, selfUser: action.data };
		default:
			return state;
	}
}

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
	console.log('new state', store.getState());
});

export default () => {
	return (
		<PetProvider>
			<Provider store={store}>
				<UserProvider>
				<AuthProvider>
					<AppContainer
						ref={navigator => {
							setNavigator(navigator);
						}}
					/>
				</AuthProvider>
				</UserProvider>
			</Provider>
		</PetProvider>
	);
};
