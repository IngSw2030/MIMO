import createDataContext from './createDataContext';
import instance from '../api/mimo';
import { navigate } from '../navigationRef';
import { call } from 'react-native-reanimated';

const purchaseReducer = (state, action) => {
	switch (action.type) {
		case 'savePurchase':
			return { ...state, purchase: action.payload };
		case 'getMyPurchases':
			return action.payload;
		case 'add_error':
			return { ...state, errorMessage: action.payload };
	}
};

const savePurchase = dispatch => async ({ idProduct, amount }, callback) => {
	try {
		const response = await instance.post('/api/Purchase/savePurchase', { idProduct, amount });
		dispatch({ type: 'savePurchase', payload: response.data.purchase });
		callback();
	} catch (err) {
		dispatch({ type: 'add_error' });
	}
};

const getMyPurchases = dispatch => async () => {
	try {
		const response = await instance.get('/api/Purchase/myPurchases');
		dispatch({ type: 'getMyPurchases', payload: response.data.purchases });
	} catch (err) {
		console.log('Error getMyPurchases', err);
		dispatch({ type: 'add_error' });
	}
};

export const { Provider, Context } = createDataContext(
	purchaseReducer,
	{ savePurchase, getMyPurchases },
	{ errorMessage: '', purchase: {}, purchases: [{}] }
);
