import createDataContext from './createDataContext';
import instance from '../api/mimo';
import { Actions, LoadEarlier } from 'react-native-gifted-chat';

const userReducer = (state, action) => {
	switch (action.type) {
		case 'getMyShopingCart':
			return action.payload;
		case 'delete_item':
			return state.filter(purchase => purchase.id !== action.payload._id);
		case 'addItem':
			return [...state, action.payload];
		case 'clear_cart':
			return action.payload;
		case 'update_local':
			const found = state.findIndex(element => element._id = action.payload.idPurchase)
			state[found].unidades = action.payload.unidades;
			return [...state]
		case 'add_error':
			return { ...state, errorMessage: action.payload };
	}
};
const getMyShopingCart = dispatch => async () => {
	try {
		const response = await instance.get('/api/Purchase/myShopingCart');
		dispatch({ type: 'getMyShopingCart', payload: response.data.purchases });
	} catch (err) {
		console.log('Error getMyShopingCart', err);
		dispatch({ type: 'add_error' });
	}
};
const addToCart = dispatch => async ({ idProduct, amount }) => {
	try {
		const response = await instance.post('/api/Purchase/savePurchase', { idProduct, amount });
		dispatch({ type: 'addItem', payload: await response.data.purchase });
	} catch (error) {
		console.log('Error en addToCart', error);
	}
};
const deleteCartItem = dispatch => async ({ idPurchase }) => {
	try {
		const response = await instance.post('/api/Purchase/delete', { idPurchase });
		dispatch({ type: 'delete_item', payload: response.data.deletedItem });
	} catch (error) {
		console.log('Error en deleteCartItem', error);
	}
};
const updateStatus = dispatch => async ({ idPurchase, status, unidades }) => {
	try {
		const response = await instance.post('/api/Purchase/updateStatus', { idPurchase, status, unidades });
		dispatch({ type: 'clear_cart', payload: response.data.purchases });
	} catch (error) {
		console.log('Error updateStatus', err);
	}
};

const updateLocal = dispatch => async ({ idPurchase, unidades }) => {
	try {
		const response = {
			idPurchase,
			unidades
		}
		dispatch({ type: 'update_local', payload: response });
	} catch (error) {
		console.log('Error updateStatus', err);
	}
};

export const { Provider, Context } = createDataContext(
	userReducer,
	{ getMyShopingCart, deleteCartItem, addToCart, updateStatus, updateLocal },
	[]
);
