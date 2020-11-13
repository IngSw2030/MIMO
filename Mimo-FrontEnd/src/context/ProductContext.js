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
				available: action.payload.available,
			};
		case 'deleteProduct':
			return { ...state, products: action.payload };
		case 'updateProduct':
			//return { ...state, product: action.payload };
			return action.payload;
		case 'get_products':
			return {
				...state,
				accesories: action.payload.accesories,
				food: action.payload.food,
				cleaning: action.payload.cleaning,
				others: action.payload.others,
			};
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		default:
			return listaDePerros;
	}
};

const getProduct = dispatch => async ({ category, name, pets }) => {
	console.log("ayuda");
	try {
		const response = await instance.post('api/Product/allProducts', {
			name,
			pets
		});

		const accesories = response.data.products.filter(obj => {
			return obj.category === 'accesorio';
		});

		const food = response.data.products.filter(obj => {
			return obj.category === 'comida';
		});
		const cleaning = response.data.products.filter(obj => {
			return obj.category === 'limpieza';
		});
		const others = response.data.products.filter(obj => {
			return obj.category === 'otros';
		});

		const respuesta = {
			accesories,
			food,
			cleaning,
			others
		}

		dispatch({ type: 'get_products', payload: respuesta });
	} catch (err) {
		console.log('Error en searchAPI', err);
		setErrorMessage(err + ' Something went wrong! :( ');
	}
};

const saveProduct = dispatch => async ({ category, name, price, photo, description, pets }) => {
	try {
		const response = await instance.post('/api/Product/save', {
			category,
			name,
			price,
			photo,
			description,
			pets,
			available: 1,
		});
		dispatch({ type: 'saveProduct', payload: response.data });
	} catch (error) {
		dispatch({ type: 'add_error' });
	}
};

const updateProduct = dispatch => async ({ name, price, photo, description, available, id }) => {
	try {
		const response = await instance.post('/api/Product/update', {
			name,
			price,
			photo,
			description,
			available,
			id,
		});
		dispatch({ type: 'updateProduct', payload: response.data });
	} catch (error) {
		dispatch({ type: 'add_error' });
	}
};

const deleteProduct = dispatch => async ({ id }) => {
	try {
		const response = await instance.post('/api/Product/delete', { id });
		dispatch({ type: 'deleteProduct', payload: response.data });
	} catch (error) {
		dispatch({ type: 'add_error' });
	}
};

export const { Context, Provider } = createDataContext(
	productReducer,
	{ saveProduct, deleteProduct, updateProduct, getProduct },
	{ accesories: [], food: [], cleaning: [], others: [], errorMessage: '', category: '', name: '', price: '', photo: '', description: '', pets: [], available: 1 }
);
