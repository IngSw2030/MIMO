import createDataContext from './createDataContext';
import instance from '../api/mimo';
import { navigate } from '../navigationRef';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'getUser':
            return { ...state, photo: action.payload.photo, name: action.payload.name, email: action.payload.email,phone:action.payload.phone,address:action.payload.address }
        case 'updateImage':
            return { ...state, photo: action.payload.photo };
        case 'updateName':
            return { ...state, name: action.payload.name };
        case 'updatePhone':
            return { ...state, phone: action.payload.phone };
        case 'updateAddress':
            return { ...state, address: action.payload.address };
        case 'add_error':
            return { ...state, errorMessage: action.payload };
    }
};

const getUser = dispatch => async () => {
    try {
        const response = await instance.get('/api/User/find');
        dispatch({ type: 'getUser', payload: response.data.user });
    } catch (err) {
        dispatch({ type: 'add_error' })
    }
}

const updateImage = (dispatch) => async ({ imagen }) => {
    try {
        console.log(imagen);
        const response = await instance.post('/api/User/update', { photo:imagen });
       // console.log(imagen);
        dispatch({ type: 'updateImage', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
}
const updateName = (dispatch) => async ({ name }) => {
    try {
        const response = await instance.post('/api/User/update', { name:name });
        dispatch({ type: 'updateName', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
}
const updatePhone = (dispatch) => async ({ Aphone }) => {
    try {
        console.log(Aphone);
        const response = await instance.post('/api/User/update', { phone:Aphone });
        console.log(Aphone);
        dispatch({ type: 'updatePhone', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
}
const updateAddress = (dispatch) => async ({ sAddress }) => {
    try {
        console.log(sAddress);
        const response = await instance.post('/api/User/update', { address:sAddress });
        console.log(sAddress);
        dispatch({ type: 'updateAddress', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
}
const deleteUser = () => async () => {

    await instance.get('/api/User/delete');
    navigate(loginFlow);

}

export const { Provider, Context } = createDataContext(
    userReducer,
    { getUser, updateImage, updateName, updatePhone, updateAddress, deleteUser },
    { errorMessage: '', photo: null, name: '', tipo: 0, email: '' }
);