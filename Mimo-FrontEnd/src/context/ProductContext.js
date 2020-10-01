import createDataContext from './createDataContext';

const productReducer = (listaDePerros, action) => {
	switch (action.type) {
		case 'addPet':
			return [
				...listaDePerros,
				{
					name: action.payload.name,
					age: action.payload.age,
					gender: action.payload.gender,
					type: action.payload.type,
				},
			];
		default:
			return listaDePerros;
	}
};

const addPet = dispatch => {
	return (name, age, gender, type, callback) => {
		dispatch({ type: 'addPet', payload: { name, age, gender, type } });
		callback(); //el callback es un navigate
	};
};
//lista inicial de productos
const productos = [
	{
		name: 'Rueda para hamster',
		price: '21000',
		description: 'Está bien bonita la rueda para hamster',
		id: '1',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster2',
		price: '22000',
		description: 'Está bien bonita la rueda para hamster',
		id: '2',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster3',
		price: '30000',
		description: 'Está bien bonita la rueda para hamster',
		id: '3',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster4',
		price: '21000',
		description: 'Está bien bonita la rueda para hamster',
		id: '4',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster6',
		price: '22000',
		description: 'Está bien bonita la rueda para hamster',
		id: '5',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster rtx 3080 4k',
		price: '3454500',
		description: 'Full rgb +10rpm ',
		id: '6',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster',
		price: '21000',
		description: 'Está bien bonita la rueda para hamster',
		id: '7',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster2',
		price: '22000',
		description: 'Está bien bonita la rueda para hamster',
		id: '8',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster3',
		price: '30000',
		description: 'Está bien bonita la rueda para hamster',
		id: '9',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster4',
		price: '21000',
		description: 'Está bien bonita la rueda para hamster',
		id: '10',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster6',
		price: '22000',
		description: 'Está bien bonita la rueda para hamster',
		id: '11',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster rtx 3080 4k',
		price: '3454500',
		description: 'Full rgb +10rpm ',
		id: '12',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster',
		price: '21000',
		description: 'Está bien bonita la rueda para hamster',
		id: '13',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster2',
		price: '22000',
		description: 'Está bien bonita la rueda para hamster',
		id: '14',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster3',
		price: '30000',
		description: 'Está bien bonita la rueda para hamster',
		id: '15',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster4',
		price: '21000',
		description: 'Está bien bonita la rueda para hamster',
		id: '16',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster6',
		price: '22000',
		description: 'Está bien bonita la rueda para hamster',
		id: '17',
		image: require('../../assets/ruedaHamster.png'),
	},
	{
		name: 'Rueda para hamster rtx 3080 4k',
		price: '3454500',
		description: 'Full rgb +10rpm ',
		id: '18',
		image: require('../../assets/ruedaHamster.png'),
	},
];
export const { Context, Provider } = createDataContext(productReducer, { addPet }, productos);
