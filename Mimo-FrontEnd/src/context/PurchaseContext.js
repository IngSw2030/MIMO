import createDataContext from './createDataContext';
import instance from '../api/mimo';
import { navigate } from '../navigationRef';
import { call } from 'react-native-reanimated';

const purchaseReducer = (state, action) => {
	switch (action.type) {
		case 'getMyPurchases':
			return action.payload;
		case 'addPurchase':
			return [...state, action.payload];
		case 'add_error':
			console.log('Error');
			return { ...state };
	}
};

const getMyPurchases = dispatch => async () => {
	try {
		const response = await instance.get('/api/Purchase/myPurchases');
		dispatch({ type: 'getMyPurchases', payload: response.data.purchases });
	} catch (err) {
		dispatch({ type: 'add_error' });
	}
};

const updateStatus = dispatch => async ({ idPurchase, status }) => {
	try {
		const response = await instance.post('/api/Purchase/updateStatus', { idPurchase, status });
	} catch (error) {
		console.log('Error updateStatus', err);
	}
};

const addPurchase = dispatch => async ({ element }) => {
	try {
		dispatch({ type: 'addPurchase', payload: element });
	} catch (err) {
		console.log('Error deletePurchase', err);
		dispatch({ type: 'add_error' });
	}
};

export const { Provider, Context } = createDataContext(
	purchaseReducer,
	{ getMyPurchases, addPurchase, updateStatus },
	{ errorMessage: '', purchase: {}, purchases: [{}] }
);
