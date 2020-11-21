import createDataContext from './createDataContext';
import instance from '../api/mimo';

const userReducer = (state, action) => {
	switch (action.type) {
		case 'savePet':
			return { ...state, pet: action.payload.pet };
		case 'getMyPets':
			return { ...state, pets: action.payload.pets };
		case 'updateImage':
			return { ...state, photo: action.payload.photo };
		case 'updateName':
			return { ...state, name: action.payload.name };
		case 'add_error':
			return { ...state, errorMessage: action.payload };
	}
};

const getMyPets = dispatch => async () => {
	try {
		const response = await instance.get('/api/Pet/myPets');
		dispatch({ type: 'getMyPets', payload: response.data });

	} catch (error) {
		dispatch({ type: 'add_error' });
	}
};

const savePet = dispatch => async ({ name, age, gender, species, photo }) => {
	try {
		const response = instance.post('/api/Pet/save', { name, age, gender, species, photo });
		dispatch({ type: 'savePet', payload: response.data.pet });
	} catch (error) {
		dispatch({ type: 'add_error' });
	}
};
const updateImage = dispatch => async ({ photo, id }) => {
	try {
		const response = await instance.post('/api/Pet/update', { photo, id });
		dispatch({ type: 'updateImage', payload: response.data });
	} catch (error) {
		dispatch({ type: 'add_error' });
	}
};
const updateName = dispatch => async ({ name, id }) => {
	try {
		const response = await instance.post('/api/Pet/update', { name, id });
		dispatch({ type: 'updateName', payload: response.data });
	} catch (error) {
		dispatch({ type: 'add_error' });
	}
};
const deletePet = () => async ({ id }) => {
	await instance.get('/api/Pet/delete', { id });
	navigate(loginFlow);
};

export const { Provider, Context } = createDataContext(
	userReducer,
	{ getMyPets, updateImage, updateName, deletePet, savePet },
	{ errorMessage: '', photo: null, name: '', tipo: 0, pets: [] }
);
