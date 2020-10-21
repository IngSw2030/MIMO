import createDataContext from './createDataContext';
import instance from '../api/mimo';

const ServiceReducer = (ListaServicios, action) => {
	switch (action.type) {
		case 'addService':
			return [
				...ListaServicios,
				{
					category: action.payload.category,
					name: action.payload.name,
					priceMax: action.payload.priceMax,
					priceMin: action.payload.priceMin,
					photo: action.payload.photo,
					description: action.payload.description,
					avgScore: 0,
				},
			];
		case 'filterService':
			/*Esta es la version llamando a la base de datos
                const listaServ = action.payload;
                var filteredServices = [];
                for(let index = 0;index < listaServ.length;index++)
                {
                    if(listaServ[index].category === action.category)
                    {
                        filteredServices = [...filteredServices, listaServ[index]];
                    }
                };*/
			var filteredServices = [];
			for (let index = 0; index < servicios.length; index++) {
				if (servicios[index].category.localeCompare(action.category) == 0) {
					console.log('si');
					filteredServices = [...filteredServices, servicios[index]];
				} else {
					console.log('no');
				}
			}
			//console.log(filteredService);
			return filteredService;
		default:
			return ListaServicios;
	}
};
const getServices = dispatch => async () => {
	try {
		const response = await instance.get('/api/Service/getServices');
		console.log('Entra al getServices');
		console.log(response.data.services);
	} catch (error) {
		console.log('Error en getServices', error);
	}
};
const filterService = dispatch => async ({ category }) => {
	try {
		//const response = await instance('/api/Service/allServices');
		//dispatch({ type: 'filterService', payload: response.data, category });
		dispatch({
			type: 'filterService',
			payload: { category, name, description, photo, priceMax, priceMin, avgScore },
			category,
		});
		callback();
	} catch (error) {
		dispatch({ type: 'add_error' });
	}
};
const addService = dispatch => async () => {
	try {
		return (category, name, description, photo, priceMax, priceMin, avgScore, callback) => {
			dispatch({ type: 'addService', payload: { category, name, description, photo, priceMax, priceMin, avgScore } });
			callback(); //el callback es un navigate
		};
	} catch (error) {
		dispatch({ type: 'add_error' });
	}
};
const servicios = [
	{
		id: '15',
		category: 'Estilista',
		name: 'Dario',
		priceMax: 17000,
		priceMin: 10000,
		photo: require('../../assets/mimo.png'),
		description: 'Paseo perros por 15 cuadras y en parques durante 30 minutos',
		avgScore: 3,
	},
	{
		id: '10',
		category: 'Estilista',
		name: 'McLovin',
		priceMax: 15000,
		priceMin: 10000,
		photo: require('../../assets/mimo.png'),
		description: 'Paseo perros por 15 cuadras y en parques durante 30 minutos',
		avgScore: 5,
	},
	{
		id: '17',
		category: 'Paseador',
		name: 'Bob',
		priceMax: 11000,
		priceMin: 10000,
		photo: require('../../assets/mimo.png'),
		description: 'Paseo perros por 15 cuadras y en parques durante 30 minutos',
		avgScore: 3,
	},
	{
		id: '26',
		category: 'Paseador',
		name: 'Pepsiman',
		priceMax: 15000,
		priceMin: 10000,
		photo: require('../../assets/mimo.png'),
		description: 'Paseo perros por 15 cuadras y en parques durante 30 minutos',
		avgScore: 5,
	},
	{
		id: '25',
		category: 'Limpiador',
		name: 'Batman',
		priceMax: 17000,
		priceMin: 10000,
		photo: require('../../assets/mimo.png'),
		description: 'Paseo perros por 15 cuadras y en parques durante 30 minutos',
		avgScore: 4,
	},
	{
		id: '23',
		category: 'Limpiador',
		name: 'Exodia',
		priceMax: 45000,
		priceMin: 10000,
		photo: require('../../assets/mimo.png'),
		description: 'Paseo perros por 15 cuadras y en parques durante 30 minutos',
		avgScore: 12,
	},
	{
		id: '22',
		category: 'Cuidador',
		name: 'Gay Robin',
		priceMax: 17000,
		priceMin: 10000,
		photo: require('../../assets/mimo.png'),
		description: 'Paseo perros por 15 cuadras y en parques durante 30 minutos',
		avgScore: 1,
	},
	{
		id: '21',
		category: 'Cuidador',
		name: 'Octavio rex',
		priceMax: 15000,
		priceMin: 10000,
		photo: require('../../assets/mimo.png'),
		description: 'Paseo perros por 15 cuadras y en parques durante 30 minutos',
		avgScore: 5,
	},
];
export const { Context, Provider } = createDataContext(ServiceReducer, { addService, getServices, filterService }, []);
