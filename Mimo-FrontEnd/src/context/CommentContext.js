import createDataContext from './createDataContext';

const commentReducer = (state, action) => {
	switch (action.type) {
		case 'buscar_posts':
			return action.payload;
		case 'add_post':
			var day = new Date().getDate(); //Current Date
			var month = new Date().getMonth() + 1; //Current Month
			var year = new Date().getFullYear(); //Current Year
			var hours = new Date().getHours(); //Current Hours
			var min = new Date().getMinutes(); //Current Minutes
			var sec = new Date().getSeconds(); //Current Seconds
			return [
				...state,
				{
					usuario: action.payload.usuario,
					descripcion: action.payload.descripcion,
					//esto seria para los replies comentarios: [],
					date: day + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec + '',
				},
			];
		case 'add_error':
			return { ...state, errorMessage: action.payload };
	}
};

//publicar un post
const subirPost = dispatch => {
	return (usuario, descripcion) => {
		dispatch({ type: 'add_post', payload: { usuario, descripcion, titulo, imagen, tags } });
		alert('Post publicado con exito');
	};
};

const posts = [];
export const { Provider, Context } = createDataContext(commentReducer, { subirPost }, posts);
