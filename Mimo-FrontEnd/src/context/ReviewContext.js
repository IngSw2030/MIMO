import createDataContext from './createDataContext';
import instance from '../api/mimo';

const ReviewReducer = (state, action) => {
    switch (action.type) {
        case 'addVetReview':
            return { ...state, reviews: [...state.reviews, action.payload.review] };
        case 'addServiceReview':
            return { ...state, reviews: [...state.reviews, action.payload.review] };
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
        const response2 = await instance.post('/api/Veterinary/updateAvgScore', {
            score,
            id: idVet
        });
        dispatch({ type: 'addVetReview', payload: response.data });
    } catch (error) {
        dispatch({ type: 'add_error' });
    }
};

const addServiceReview = dispatch => async ({ comment, score, idService }) => {
    try {
        
        const response = await instance.post('/api/Review/saveServiceReview', {
            score,
            comment,
            idService,
        });
        const response2 = await instance.post('/api/Service/updateAvgScore', {
            score,
            id: idService
        });
        dispatch({ type: 'addVetReview', payload: response.data });
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
