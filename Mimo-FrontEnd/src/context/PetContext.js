import createDataContext from './createDataContext';

//cuando llega un animal nuevo....
const petReducer = (state, action) => {
	switch (action.type) {
		//..y es por addPet, se agrega a la lista
		case 'addPet':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 9999).toString(),
					name: action.payload.name,
					age: action.payload.age,
					gender: action.payload.gender,
					type: action.payload.type,
				},
			];
		default:
			return state;
	}
};

//Esto lo manda a petReducer
const addPet = dispatch => {
	return (name, age, gender, type, callback) => {
		dispatch({ type: 'addPet', payload: { name, age, gender, type } });
		callback(); //el callback es un navigate
	};
};
//lista inicial de mascotas
const mascotas = [
	{ name: 'Mel', age: 3, gender: 'macho', type: 'perro' },
	{ name: 'Cafe', age: 2, gender: 'macho', type: 'hamster' },
	{ name: 'Cafe2', age: 2, gender: 'macho', type: 'hamster' },
	{ name: 'Cafe3', age: 2, gender: 'macho', type: 'hamster' },
	{ name: 'Cafe52', age: 2, gender: 'macho', type: 'hamster' },
	{ name: 'Cafe512', age: 2, gender: 'macho', type: 'hamster' },
	{ name: 'Cafe53', age: 2, gender: 'macho', type: 'hamster' },
	{ name: 'Cafe54', age: 2, gender: 'macho', type: 'hamster' },
	{ name: 'Cafe555', age: 2, gender: 'macho', type: 'hamster' },
];
//El tercer argumento es definido como state, y asi se llama en PetScreen
export const { Context, Provider } = createDataContext(petReducer, { addPet }, mascotas);
