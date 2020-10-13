import createDataContext from './createDataContext';
import instance from '../api/mimo';
const productReducer = (state, action) => {
	switch (action.type) {
		case 'getByPet':
			var listaProductos = action.payload;
			for (let index = 0; index < listaProductos.length; index++) {
				listaProductos[index] = {
					name: listaProductos[index].name,
					category: listaProductos[index].category,
					price: listaProductos[index].price,
					description: listaProductos[index].description,
					id: listaProductos[index]._id,
					image: listaProductos[index].photo,
				};
			}
			return listaProductos;
		default:
			return state;
	}
};

const getProductsByPets = dispatch => async type => {
	try {
		const response = await instance.post('api/Product/findByPets', { pets: type });
		dispatch({ type: 'getByPet', payload: response.data.products });
	} catch (error) {
		console.log('error getProductsByPets');
	}
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
export const { Context, Provider } = createDataContext(productReducer, { getProductsByPets }, []);
