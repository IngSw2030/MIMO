import createDataContext from './createDataContext';
import instance from '../api/mimo';
import { navigate } from '../navigationRef';

const purchaseReducer = (state, action) => {
    switch (action.type) {
        case 'savePurchase':
            return { ...state, purchase: action.payload }
        case 'getMyPurchases':
            return { ...state, purchases: action.payload.photo };
        case 'add_error':
            return { ...state, errorMessage: action.payload };
    }
};

const savePurchase = dispatch => async ({ idProduct }) => {
    try {
        const response = await instance.post('/api/Purchase/save', {idProduct});
        dispatch({ type: 'savePurchase', payload: response.data.purchase });
    } catch (err) {
        dispatch({ type: 'add_error' })
    }
}

const getMyPurchases = dispatch => async () => {
    try {
        const response = await instance.get('/api/Purchase/myPurchases');
        dispatch({ type: 'getMyPurchases', payload: response.data.purchases });
    } catch (err) {
        dispatch({ type: 'add_error' })
    }
}



export const { Provider, Context } = createDataContext(
    purchaseReducer,
    { savePurchase, getMyPurchases },
    { errorMessage: '', purchase: {}, purchases: [{}] }
);