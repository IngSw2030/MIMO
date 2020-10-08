import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import ngrokAddr from '../../ngrokConfig';
/*
 Se utiliza Redux en vez de Context porque: 
 1. nosotros estamos usando createDataContext el cual no acepta un reducer que use socket.on 
	para recibir mensajes del servidor, entonces igual no hubiear quedado como los demas contextos.
 2. createSocketIoMiddleware hace que el codigo sea mas legible y facil de editar al conectar el
	socket server directo con todo lo demas. 
 */

const socket = io(ngrokAddr.socket);
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

function reducer(state = { conversations: {} }, action) {
	switch (action.type) {
		case 'users_online': //crea una conversacion con los users_online. si no existia conversacion, empieza vacia
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
			//eventualmente los users online se cambiara por lista de amigos
			return { ...state, usersOnline, conversations };
		case 'private_message': //pega el ultimo mensaje a la conversacion con el transmisor
			const conversationId = action.data.conversationId;
			return {
				...state,
				conversations: {
					...state.conversations,
					[conversationId]: {
						...state.conversations[conversationId], //los mensajes con el emisor se vuleven los anteriores + el nuevo
						messages: [action.data.message, ...state.conversations[conversationId].messages],
					},
				},
			};
		case 'self_user': //le dice al cliente cual es su propio id. Ayuda para que la GiftedChat sepa si es mensaje del mismo usuario o del otro
			return { ...state, selfUser: action.data };
		default:
			return state;
	}
}

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
	console.log('new state', store.getState());
});
export default store;
