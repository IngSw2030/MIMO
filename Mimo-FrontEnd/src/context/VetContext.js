import createDataContext from './createDataContext';

const veterinaryReducer = (listaVeterinarias, action) => {
	switch (action.type) {
		case 'addVet':
			return [
				...listaVeterinarias,
				{
                    name: action.payload.name,
                    animals: action.payload.animals,
                    photo: action.payload.image,
                    address: action.payload.address,
                    description: action.payload.description,
                    avgScore: 0
				},
			];
		default:
			return listaVeterinarias;
	}
};

const addVet = dispatch => async () =>  {
    try{
        return (name, description, telefono, image, usuario, callback) => {
            dispatch({ type: 'addVet', payload: { name, description, telefono, image, usuario, address, animals } });
            callback(); //el callback es un navigate
        };
    } 
    catch (error) {
        dispatch({ type: 'add_error' })
    }
};
const veterinarias = [
    {
        id: '7',
        name: 'Pet plus Vet',
		description: 'Esta es una gran veterinaria, super pet es una mierda',
		telefono: '3003030',
        image: require('../../assets/ruedaHamster.png'),
        usuario: '1',
        address: 'cra 30',
        avgScore: 4
    },
    {
        id: '8',
        name: 'Super pet',
		description: 'Esta es una gran veterinaria, pet plus vet es una mierda',
		telefono: '3003031',
        image: require('../../assets/ruedaHamster.png'),
        usuario: '1',
        address: 'cra 30',
        avgScore: 4
    }

];
export const { Context, Provider } = createDataContext(veterinaryReducer, { addVet }, veterinarias);