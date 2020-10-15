import createDataContext from './createDataContext';
import instance from '../api/mimo';

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'saveProduct':
			const addedProduct = {
				name: action.payload.product.name,
				quantity: action.payload.quantity,
				price: action.payload.quantity * action.payload.product.price,
				description: action.payload.description,
				_id: action.payload.product._id,
			};
			return [...state, addedProduct];
		case 'deleteProduct':
			const indexOfProduct = state.indexOf(action.payload);
			if (indexOfProduct < 0) {
				return state;
			} else {
				var newState = state;
				newState.splice(indexOfProduct, 1);
				return newState;
			}
	}
};

const saveProduct = dispatch => async ({ product, quantity }) => {
	dispatch({ type: 'saveProduct', payload: { product, quantity } });
};
const updateProduct = dispatch => async ({ photo, id }) => {};

const deleteProduct = () => async ({ id }) => {
	await instance.get('/api/Pet/delete', { id });
	navigate(loginFlow);
};

export const { Provider, Context } = createDataContext(cartReducer, { deleteProduct, saveProduct }, []);
