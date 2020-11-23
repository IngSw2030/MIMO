import instance from '../api/mimo';
import createDataContext from './createDataContext';

const veterinaryReducer = (state, action) => {
    switch (action.type) {
        case 'getAllVets':
            return { ...state, veterinarias: state.veterinarias.concat(action.payload), initial: state.initial + 10 };
        case 'getMyVets':
            return { ...state, myVets: action.payload };
        case 'saveVet':
            return { ...state, veterinaria: action.payload };
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return { ...state };
    }
};

const getAllVets = dispatch => async ({ initial, limit }) => {
    console.log(initial);
    console.log(limit);
    try {
        const response = await instance.post('api/Veterinary/Vets', { initial, limit });
        //console.log(response.data.vets);
        dispatch({ type: 'getAllVets', payload: response.data.vets });
    } catch (err) {
        dispatch({ type: 'add_error', payload: err });
    }
}

const getMyVets = dispatch => async () => {
    try {
        const response = await instance.get('api/Veterinary/myVets');
        dispatch({ type: 'getMyVets', payload: response.data.vets });
    }
    catch (error) {
        dispatch({ type: 'add_error' });
    }
};

const saveVet = dispatch => async ({ name, animals, photo, address, description, contact, openAt, closeAt }) => {
    try {
        const response = await instance.post('api/Veterinary/save', { name, animals, photo, address, description, contact, openAt, closeAt });
        dispatch({ type: 'saveVet', payload: response.data.veterinary });
    } catch (error) {
        dispatch({ type: 'add_error' });
    }
}

const updateVet = dispatch => async ({ name, animals, photo, address, description, contact, openAt, closeAt, id }) => {
    try {
        const response = await instance.post('api/Veterinary/update', { name, animals, photo, address, description, contact, openAt, closeAt, id });
        dispatch({ type: 'updateVet', payload: response.data.veterinary });
    } catch (error) {
        dispatch({ type: 'add_error' });
    }
}

export const { Context, Provider } = createDataContext(
    veterinaryReducer,
    { getMyVets, getAllVets, saveVet, updateVet },
    { myVets: [], veterinarias: [], veterinaria: {}, errorMessage: '', initial: 0 }
);