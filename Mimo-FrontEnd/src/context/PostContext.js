import createDataContext from './createDataContext';

const postReducer = (state, action) => {
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
					id: Math.floor(Math.random() * 9999).toString(),
					usuario: action.payload.usuario,
					descripcion: action.payload.descripcion,
					titulo: action.payload.titulo,
					imagen: action.payload.imagen,
					tags: action.payload.tags,
					comentarios: [],
					date: day + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec + '',
				},
			];
		case 'add_error':
			return { ...state, errorMessage: action.payload };
	}
};

//publicar un post
const addPost = dispatch => {
	return (titulo, descripcion, imagen, tags) => {
		dispatch({ type: 'add_post', payload: { titulo, descripcion, imagen, tags } });
		alert('Post publicado con exito');
	};
};
const dummyDescription =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const posts = [
	{
		usuario: 'usuario 1',
		descripcion: dummyDescription,
		titulo: 'Titulo 1',
		tags: ['tag1', 'tag2'],
		id: '1',
		imagen: require('../../assets/ruedaHamster.png'),
	},
];
export const { Provider, Context } = createDataContext(postReducer, { addPost }, posts);
