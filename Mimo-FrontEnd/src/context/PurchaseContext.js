import createDataContext from './createDataContext';
import instance from '../api/mimo';
import { navigate } from '../navigationRef';
import { call } from 'react-native-reanimated';

const purchaseReducer = (state, action) => {
	switch (action.type) {
		case 'getmySells':
			return action.payload;
		case 'savePurchase':
			return { ...state, purchase: action.payload };
		case 'getMyPurchases':
			return action.payload;
		case 'getMyShopingCart':
			return action.payload;
		case 'updateStatus':
			return { ...state };
		case 'deletePurchase':
			return { ...state };
		case 'add_error':
			return { ...state, errorMessage: action.payload };
	}
};
const getMySells = dispatch => async () => {
	try {
		const response = await instance.get('/api/Purchase/mySells');
		console.log('Entra al getMySells');
		dispatch({ type: 'getmySells', payload: response.data.sells });
	} catch (err) {
		dispatch({ type: 'add_error' });
	}
};
const savePurchase = dispatch => async ({ idProduct, amount }, callback) => {
	try {
		const response = await instance.post('/api/Purchase/savePurchase', { idProduct, amount });
		console.log('Entra al savePurchase');
		dispatch({ type: 'savePurchase', payload: response.data.purchase });
		callback();
	} catch (err) {
		dispatch({ type: 'add_error' });
	}
};

const getMyPurchases = dispatch => async () => {
	try {
		const response = await instance.get('/api/Purchase/myPurchases');
		console.log('Entra al getMyPurchases');
		dispatch({ type: 'getMyPurchases', payload: response.data.purchases });
	} catch (err) {
		console.log('Error getMyPurchases', err);
		dispatch({ type: 'add_error' });
	}
};

const getMyShopingCart = dispatch => async () => {
	try {
		const response = await instance.get('/api/Purchase/myShopingCart');
		console.log('Entra al getMyShopingCart');
		dispatch({ type: 'getMyShopingCart', payload: response.data.purchases });
	} catch (err) {
		console.log('Error getMyPurchases', err);
		dispatch({ type: 'add_error' });
	}
};

const updateStatus = dispatch => async ({ idPurchase, status }) => {
	try {
		const response = await instance.post('/api/Purchase/updateStatus', { idPurchase, status });
		console.log('response en updateStatus', response.data);
		console.log('Entra al updateStatus');
	} catch (error) {
		console.log('Error getMyPurchases', err);
	}
};

const deletePurchase = dispatch => async ({ idPurchase }) => {
	try {
		const response = await instance.post('/api/Purchase/delete', { idPurchase });
		console.log('Entra al deletePurchase');
		dispatch({ type: 'deletePurchase', payload: response.data });
	} catch (err) {
		console.log('Error getMyPurchases', err);
		dispatch({ type: 'add_error' });
	}
};

export const { Provider, Context } = createDataContext(
	purchaseReducer,
	{ savePurchase, getMyPurchases, getMyShopingCart, deletePurchase, updateStatus, getMySells },
	{ errorMessage: '', purchase: {}, purchases: [{}] }
);
