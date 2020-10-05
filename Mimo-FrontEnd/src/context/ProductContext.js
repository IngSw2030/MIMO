import createDataContext from './createDataContext';
import instance from '../api/mimo';


const productReducer = (state, action) => {
	switch (action.type) {
		case 'saveProduct':
            return {
                ...state,
                category: action.payload.category,
                name: action.payload.name, 
                price: action.payload.price,
                photo: action.payload.photo, 
                description: action.payload.description, 
                pets: action.payload.pets, 
                available: action.payload.available
            };
        case 'deleteProduct':
            return {...state, products: action.payload};
        case 'updateProduct':
            return {...state, product: action.payload}
        case 'add_error':
            return { ...state, errorMessage: action.payload };
		default:
			return listaDePerros;
	}
};

const saveProduct = (dispatch) => async({category, name, price, photo, description, pets}) =>{
	try {
        const response = await instance.post('/api/Product/save', 
            {
                category, 
                name, 
                price, 
                photo, 
                description, 
                pets, 
                available:1
            });
		dispatch({ type: 'saveProduct', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
};


const updateProduct = (dispatch) => async({ name, price, photo, description, available, id}) =>{
    try {
        const response = await instance.post('/api/Product/update', 
            { 
                name, 
                price, 
                photo, 
                description,
                available, 
                id
            });
        dispatch({ type: 'updateProduct', action: response.data})
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
};

const deleteProduct = (dispatch) => async({id}) => {
    try {
        const response = await instance.post('/api/Product/delte', {id});
        dispatch({type: 'deleteProduct', action: response.data})
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
}


export const { Context, Provider } = createDataContext(
    productReducer, 
    { saveProduct, deleteProduct, updateProduct },
    {errorMessage: '', category: '', name: '', price: '', photo: '', description: '', pets: [], available: 1}
);