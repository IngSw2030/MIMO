import instance from '../api/mimo';
import createDataContext from './createDataContext';

const veterinaryReducer = (state, action) => {
    switch (action.type) {
        case 'getAllVets':
            return { ...state, veterinarias: action.payload };
        case 'getMyVets':
            return { ...state, veterinarias: action.payload };
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return { ...state };
    }
};

const getAllVets = dispatch => async () => {
    try {

        const response = await instance.get('api/Veterinary/allVets');
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

export const { Context, Provider } = createDataContext(
    veterinaryReducer,
    { getMyVets, getAllVets },
    { veterinarias: [{}], veterinaria: [], errorMessage: '' }
);