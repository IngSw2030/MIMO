import createDataContext from './createDataContext';
import instance from '../api/mimo';

const userReducer = (state, action) => {
	switch (action.type) {
		case 'getAllUsers':
			return { users: action.payload };

		case 'add_error':
			return { ...state, errorMessage: action.payload };
	}
};

const getUsers = dispatch => async () => {
	try {
		const response = await instance.get('/api/User/allUsers');
		//console.log((await response).data.users);

		dispatch({ type: 'getAllUsers', payload: await response.data.users });
	} catch (error) {
		dispatch({ type: 'add_error' });
	}
};

export const { Provider, Context } = createDataContext(
	userReducer,
	{ getUsers },
	{ errorMessage: '', photo: null, name: '', tipo: 0 }
);
