import createDataContext from './createDataContext';
import instance from '../api/mimo';
import { navigate } from '../navigationRef';
import { call } from 'react-native-reanimated';

const sellsReducer = (state, action) => {
	switch (action.type) {
		case 'getmySells':
			return action.payload;
		case 'add_error':
			console.log('Error');
			return { ...state };
	}
};

const getMySells = dispatch => async () => {
	try {
		const response = await instance.get('/api/Purchase/mySells');
		dispatch({ type: 'getmySells', payload: response.data.sells });
	} catch (err) {
		dispatch({ type: 'add_error' });
	}
};

export const { Provider, Context } = createDataContext(
	sellsReducer,
	{ getMySells },
	{ errorMessage: '', purchase: {}, purchases: [{}] }
);
