import createDataContext from './createDataContext';

const ServiceReducer = (ListaServicios, action) => {
	switch (action.type) {
		case 'addService':
			return [
				...ListaServicios,
				{
                    category= payload.category,
                    name =payload.name,
                    priceMax=payload.priceMax,
                    priceMin=payload.priceMin,
                    photo=payload.photo,
                    description=payload.description,
				},
			];
		default:
			return ListaServicios;
	}
};

const addService = dispatch => async () =>  {
    try{
        return (name, description, telefono, image, usuario, callback) => {
            dispatch({ type: 'addService', payload: { category, name, description, photo, priceMax, priceMin } });
            callback(); //el callback es un navigate
        };
    } 
    catch (error) {
        dispatch({ type: 'add_error' })
    }
};
const servicios = [
    {
        category= 'Grooming',
        name ='Dario',
        priceMax=15000,
        priceMin=10000,
        photo=payload.photo,
        description='Paseo perros por 15 cuadras y en parques durante 30 minutos',
    }


];
export const { Context, Provider } = createDataContext(ServiceReducer, { addVet }, veterinarias);