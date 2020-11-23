import { useEffect, useContext } from 'react';
import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import instance from '../api/mimo';
import { Context as UserContext } from './UserContext';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'clear_em':
			return { ...state, errorMessage: '' };
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signin':
			return { errorMessage: '', token: action.payload };
		case 'signout':
			return { errorMessage: '', token: null };
		default:
			return { ...state, errorMessage: '' };
	}
};

const tryLocalSignin = dispatch => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({
			type: 'signin',
			payload: token,
		});
		//const {getuser} = useContext(UserContext);

		//getuser();
		navigate('Loading');

	} else {
		navigate('Start');
	}
};

const clearErrorMessage = dispatch => () => {
	dispatch({
		type: 'clear_em:',
	});
};

const signup = dispatch => async ({ email, name, password, tipoUser }) => {
	try {
		const response = await instance.post('/api/Auth/signup', { email, name, password, tipoUser });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });

		navigate('Loading');
	} catch (error) {
		dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
	}
};

const signin = dispatch => async ({ email, password }) => {
	try {
		const response = await instance.post('/api/Auth/signin', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'signin', payload: response.data.token });

		navigate('Loading');
	} catch (error) {
		dispatch({ type: 'add_error', payload: 'Something went wrong signing in' });
	}
};

const signout = dispatch => async () => {
	await AsyncStorage.removeItem('token');
	dispatch({ type: 'signout' });

	navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup, clearErrorMessage, tryLocalSignin },
	{ token: null, errorMessage: '' }
);
