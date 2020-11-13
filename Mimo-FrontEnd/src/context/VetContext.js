import instance from '../api/mimo';
import createDataContext from './createDataContext';

const veterinaryReducer = (state, action) => {
    switch (action.type) {
        case 'getAllVets':
            return { ...state, veterinarias: state.veterinarias.concat(action.payload), initial: state.initial + 10 };
        case 'getMyVets':
            return { ...state, veterinarias: action.payload };
        case 'saveVet':
            return { ...state, veterinaria: action.payload };
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return { ...state };
    }
};

const getAllVets = dispatch => async ({ initial, limit }) => {
    //console.log(initial);
    //console.log(limit);
    try {
        const response = await instance.post('api/Veterinary/Vets', { initial, limit });
        //console.log(response.data.vets);
        dispatch({ type: 'getAllVets', payload: response.data.vets });
    } catch (err) {
        dispatch({ type: 'add_error', action: err });
    }
}

const getMyVets = dispatch => async ({ id }) => {
    try {
        const response = await instance.post('api/Veterinary/myVets', { id });
        dispatch({ type: 'getMyVets', action: response.data });
    }
    catch (error) {
        dispatch({ type: 'add_error' });
    }
};

const saveVet = dispatch => async ({ name, animals, photo, address, description, contact, openAt, closeAt }) => {
    try {
        const response = await instance.post('api/Veterinary/save', { name, animals, photo, address, description, contact, openAt, closeAt });
        dispatch({ type: 'saveVet', action: response.data.veterinary });
    } catch (error) {
        dispatch({ type: 'add_error' });
    }
}

export const { Context, Provider } = createDataContext(
    veterinaryReducer,
    { getMyVets, getAllVets, saveVet },
    { veterinarias: [], veterinaria: {}, errorMessage: '', initial: 0 }
);