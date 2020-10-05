import createDataContext from './createDataContext';
import instance from '../api/mimo';


const productReducer = (state, action) => {
	switch (action.type) {
		case 'saveProduct':
            return {
                ...state, 
                errorMessage: action.payload, 
                category: action.payload.category,
                name: action.payload.name, 
                price: action.payload.price,
                photo: action.payload.photo, 
                description: action.payload.description, 
                pets: action.payload.pets, 
                available: action.payload.available
            };
        case 'getAllProducts':
            return {...state, products: action.payload.products}
        case 'add_error':
            return { ...state, errorMessage: action.payload };
		default:
			return listaDePerros;
	}
};

const saveProduct = (dispatch) => async({category, name, price, photo, description, pets}) =>{
	try {
        const response = await instance.post('/api/Product/save', {category, name, price, photo, description, pets, available:1});
		dispatch({ type: 'saveProduct', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
};

const getAllProducts = (dispatch) => async() => {
    try {
        const response = await instance.get('/api/Product/allProducts');
        dispatch({ type: "getAllProducts", action: response.data})
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
}

export const { Context, Provider } = createDataContext(
    productReducer, 
    { saveProduct },
    {errorMessage: '', category: '', name: '', price: '', photo: '', description: '', pets: [], available: 1}
);