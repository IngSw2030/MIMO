import createDataContext from './createDataContext';
import instance from '../api/mimo';
import { navigate } from '../navigationRef';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'getUser':
            return { ...state,tipo: action.payload.userType, photo: action.payload.photo, name: action.payload.name, email: action.payload.email,phone:action.payload.phone,address:action.payload.address }
            case 'update':
                return action.payload;
        case 'pinPost':
            return { ...state, pinnedPosts: action.payload};
        case 'unpinPost':
            return { ...state, pinnedPosts: action.payload};
        case 'myPinnedPosts': 
            return { ...state, pinnedPosts: action.payload };
        case 'getSingleUser':
            return { ...state, poster: action.payload };
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

const update = (dispatch) => async({name,phone,imagen,address})=>{
   
        try {
            const response = await instance.post('/api/User/update', {name,phone,imagen,address});
            dispatch({ type: 'update', payload: response.data });
            
        } catch (error) {
            dispatch({ type: 'add_error' })
        }
    
}
const updateImage = (dispatch) => async ({ imagen }) => {
    try {
        
        const response = await instance.post('/api/User/update', { photo:imagen });
       // console.log(imagen);
        dispatch({ type: 'update', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
}
const updateName = (dispatch) => async ({ name }) => {
    try {
        const response = await instance.post('/api/User/update', { name:name });
        dispatch({ type: 'update', payload: response.data });
        
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
}
const updatePhone = (dispatch) => async ({ Aphone }) => {
    try {
        console.log(Aphone);
        const response = await instance.post('/api/User/update', { phone:Aphone });
        console.log(Aphone);
        dispatch({ type: 'update', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
}
const updateAddress = (dispatch) => async ({ sAddress }) => {
    try {
        console.log(sAddress);
        const response = await instance.post('/api/User/update', { address:sAddress });
        console.log(sAddress);
        dispatch({ type: 'update', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' })
    }
}


const pinPost = (dispatch) => async ({ idPost }) => {
    try {
        await instance.post('/api/User/pinPost', { idPost });
        //myPinnedPosts();
    } catch (error) {
        dispatch({ type: 'add_error', payload: error });
    }
};


const unpinPost = (dispatch) => async ({ idPost }) => {
    try {
        await instance.post('/api/User/unpinPost', { idPost });
        //myPinnedPosts();
    } catch (error) {
        dispatch({ type: 'add_error', payload: error });
    }
};

const myPinnedPosts = (dispatch) => async () => {
    try {
        const response = await instance.get('/api/User/myPinnedPosts');
        dispatch({ type: 'myPinnedPosts', payload: response.data.posts });
    } catch (error) {
        dispatch({ type: 'add_error', payload: error });
    }
};

const deleteUser = () => async () => {

    await instance.get('/api/User/delete');
    navigate(loginFlow);

}

export const { Provider, Context } = createDataContext(
    userReducer,
    { getUser, updateImage, updateName, updatePhone,update, updateAddress, deleteUser, pinPost, unpinPost, myPinnedPosts },
    { errorMessage: '', photo: null, name: '', tipo: null, email: '', pinnedPosts: [] }
);