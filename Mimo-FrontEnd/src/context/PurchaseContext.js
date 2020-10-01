import createDataContext from './createDataContext';
import { SectionList } from 'react-native';

const purchaseReducer = (state, action) => {
	switch (action.type) {
		case 'add_purchase':
			var day = new Date().getDate(); //Current Date
			var month = new Date().getMonth() + 1; //Current Month
			var year = new Date().getFullYear(); //Current Year
			var hours = new Date().getHours(); //Current Hours
			var min = new Date().getMinutes(); //Current Minutes
			var sec = new Date().getSeconds(); //Current Seconds
			return [
				...state,
				{
					name: action.payload.name + '',
					quantity: action.payload.quantity,
					totalAmount: action.payload.totalAmount,
					image: action.payload.image,
					date: day + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec + '',
					id: Math.floor(Math.random() * 9999).toString(),
				},
			];
		default:
			return state;
	}
};

const addPurchase = dispatch => {
	return (name, quantity, totalAmount, image, callback) => {
		dispatch({ type: 'add_purchase', payload: { name, quantity, totalAmount, image } });
		callback(); //el callback es un navigate
	};
};

export const { Context, Provider } = createDataContext(purchaseReducer, { addPurchase }, []);
