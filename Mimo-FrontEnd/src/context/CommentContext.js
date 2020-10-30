import createDataContext from './createDataContext';

const commentReducer = (state, action) => {
	switch (action.type) {
		case 'saveComment':
			return {...state, comment: action.payload};
		case 'ofPost':
			return {...state, comments: action.payload};
		case 'add_error':
			return { ...state, errorMessage: action.payload };
	}
};

//publicar un post
const saveComment = dispatch => async ({ content, idPost }) => {
	try {
		const response = await instance.post('/api/Comment/save', { content, idPost });
		dispatch({ type: 'saveComment', payload: response.data.comment });
	} catch (error) {
		dispatch({ type: 'add_error', payload: error });
	}
};

const ofPost = dispatch => async({ idPost }) => {
	try {
		const response = await instance.post('/api/Comment/ofPost', { idPost });
		dispatch({ type: 'ofPost', payload: response.data.comments });
	} catch (error) {
		dispatch({ type: 'add_error', payload: error });
	}
};

export const { Provider, Context } = createDataContext(
	commentReducer,
	{ saveComment, ofPost }, 
	{ errorMessage: '', comments: []}
);

