import instance from '../api/mimo';
import createDataContext from './createDataContext';

const postReducer = (state, action) => {
	switch (action.type) {
		case 'savePost':
			return {...state, post: action.payload};
		case 'myPosts':
			return {...state, myPosts: action.payload};
		case 'updatePost':
			return {...state};
		case 'deletePost':
			return {...state};
		case 'add_error':
			return { ...state, errorMessage: action.payload };
	}
};

//publicar un post
const savePost = dispatch => async ({ photo, title, content, tags }) => {
	try {
		const response = await instance.post('/api/Post/save', {
			photo,
			title,
			content,
			tags
		});
		dispatch({ type: 'savePost', payload: response.data.post });
	} catch (error) {
		dispatch({ type: 'add_error', payload: error });
	}
};

const myPosts = dispatch => async() => {
	try {
		const response = await instance.get('api/Post/myPosts');
		dispatch({ type: 'myPosts', payload: response.data.posts })
	} catch (error) {
		dispatch({ type: 'add_error', payload: error });
	}
};

const updatePost = dispatch => async({ photo, title, content, id }) => {
	try {
		const response = await instance.post('/api/Post/update', { photo, title, content, id });
		dispatch({ type: 'updatePost', payload: response.data})
	} catch (error) {
		dispatch({ type: 'add_error', payload: error });
	}
};

const deletePost = dispatch => async({ id }) => {
	try {
		const response = await instance.post('/api/Post/delete', { id });
		dispatch({ type: 'deletePost', payload: response.data})
	} catch (error) {
		dispatch({ type: 'add_error', payload: error });
	}
};

export const { Provider, Context } = createDataContext(
	postReducer,
	{ savePost, myPosts, updatePost, deletePost }, 
	{ errorMessage: '', myPosts: []}
);
