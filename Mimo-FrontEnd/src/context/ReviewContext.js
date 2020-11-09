import createDataContext from './createDataContext';
import instance from '../api/mimo';

const ReviewReducer = (state, action) => {
    switch (action.type) {
        case 'addVetReview':
            return action.payload;
        case 'addServiceReview':
            return action.payload;
        case 'getVetReviews':
            return action.payload;
        case 'getServiceReviews':
            return action.payload;
        case 'add_error':
            return { ...state };
    }
};

const addVetReview = dispatch => async ({ comment, score, idVet }) => {

    try {
        const response = await instance.post('/api/Review/saveVetReview', {
            score,
            comment,
            idVet,
        });
        console.log(response.data);
        dispatch({ type: 'addVetReview', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' });
    }
};

const addServiceReview = dispatch => async ({ comment, score, idVet }) => {
    try {
        const response = await instance.post('/api/Review/saveServiceReview', {
            score,
            comment,
            idVet,
        });
        dispatch({ type: 'addServiceReview', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' });
    }
};

const getVetReviews = dispatch => async ({ idVet }) => {
    try {
        const response = await instance.post('/api/Review/vetReviews', { idVet });
        dispatch({ type: 'getVetReviews', payload: response.data });
    }
    catch (error) {
        dispatch({ type: 'add_error' });
    }
};

const getServiceReviews = dispatch => async ({ idService }) => {
    try {
        const response = await instance.post('/api/Review/ServiceReviews', { idService });
        dispatch({ type: 'getServiceReviews', payload: response.data });
    }
    catch (error) {
        dispatch({ type: 'add_error' });
    }
};

export const { Context, Provider } = createDataContext(
    ReviewReducer,
    { addVetReview, addServiceReview, getVetReviews, getServiceReviews },
    { reviews: [] }
);
