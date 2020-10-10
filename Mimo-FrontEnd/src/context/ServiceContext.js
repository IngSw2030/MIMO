import createDataContext from './createDataContext';

const ServiceReducer = (ListaServicios, action) => {
	switch (action.type) {
		case 'addService':
			return [
				...ListaServicios,
				{
                    category: action.payload.category,
                    name :action.payload.name,
                    priceMax:action.payload.priceMax,
                    priceMin:action.payload.priceMin,
                    photo:action.payload.photo,
                    description:action.payload.description,
                    avgScore: 0
				},
			];
		default:
			return ListaServicios;
	}
};

const addService = dispatch => async () =>  {
    try{
        return (category, name, description, photo, priceMax, priceMin,avgScore, callback) => {
            dispatch({ type: 'addService', payload: { category, name, description, photo, priceMax, priceMin, avgScore } });
            callback(); //el callback es un navigate
        };
    } 
    catch (error) {
        dispatch({ type: 'add_error' })
    }
};
const servicios = [
    {
        id: 15,
        category: 'Grooming',
        name :'Dario',
        priceMax:17000,
        priceMin:10000,
        photo:require('../../assets/mimo.png'),
        description:'Paseo perros por 15 cuadras y en parques durante 30 minutos',
        avgScore: 3
    },
    {
        id: 10,
        category: 'Grooming',
        name :'McLovin',
        priceMax:15000,
        priceMin:10000,
        photo:require('../../assets/mimo.png'),
        description:'Paseo perros por 15 cuadras y en parques durante 30 minutos',
        avgScore: 5
    }
];
export const { Context, Provider } = createDataContext(ServiceReducer, { addService }, servicios);