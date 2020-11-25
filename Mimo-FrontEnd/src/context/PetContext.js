import createDataContext from './createDataContext';
import instance from '../api/mimo';

const userReducer = (state, action) => {
	switch (action.type) {
		case 'savePet':
			state.pets.push(action.payload.pet)
			return { ...state, pet: action.payload.pet };
		case 'getMyPets':
			return { ...state, pets: action.payload.pets };
		case 'updateImage':
			return { ...state, photo: action.payload.photo };
		case 'updateName':
			return { ...state, name: action.payload.name };
		case 'deletePet':
			var newPets = state.pets.filter(item => item._id != action.payload.id)
			return { ...state, pets: newPets };
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
		const response = await instance.post('/api/Pet/save', { name, age, gender, species, photo });
		dispatch({ type: 'savePet', payload: response.data });
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
const deletePet = dispatch => async ({ id }) => {
	try {
		instance.post('/api/Pet/delete', { id });
		dispatch({ type: 'deletePet', payload: { id } })
	} catch (error) {
		dispatch({ type: 'add_error', payload: error });
	}
};

export const { Provider, Context } = createDataContext(
	userReducer,
	{ getMyPets, updateImage, updateName, deletePet, savePet },
	{ errorMessage: '', photo: null, name: '', tipo: 0, pets: [] }
);
