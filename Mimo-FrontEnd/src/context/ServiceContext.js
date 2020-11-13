import createDataContext from './createDataContext';
import instance from '../api/mimo'

const serviceReducer = (state, action) => {
	switch (action.type) {
		case 'saveService':
			return {
				    ...state,
                    category: action.payload.category,
                    name :action.payload.name,
                    priceMax:action.payload.priceMax,
                    priceMin:action.payload.priceMin,
                    photo:action.payload.photo,
                    description:action.payload.description,
                    avgScore: action.payload.avgScore,
            };
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
                for(let index = 0;index < servicios.length;index++)
                {
                    if(servicios[index].category.localeCompare(action.category)==0)
                    {
                        console.log('si')
                        filteredServices = [...filteredServices, servicios[index]];
                    }
                    else{
                        console.log('no')
                    }
                };
                //console.log(filteredService);
                return filteredService
        case 'saveService':
            return action.payload;
        case 'deleteService':
            return {...state, services: action.payload};
		default:
			return state;
	}
};
const filterService = dispatch =>async({category})=>{
    try{
         //const response = await instance('/api/Service/allServices');
         //dispatch({ type: 'filterService', payload: response.data, category });
         dispatch({ type: 'filterService', payload:{ category, name, description, photo, priceMax, priceMin, avgScore }, category });
         callback();
    }
    catch (error) {
        dispatch({ type: 'add_error' })
    }
};
const saveService =dispatch=> async ({category, name, description, photo, price})=>  {
    try{
        const response = await instance.post('/api/Service/save',{
            category, 
            name, 
            price,
            description, 
            photo, 
        });
        dispatch({type: 'saveService', payload:response.data})
    } 
    catch (error) {
        dispatch({ type: 'add_error' })
    }
};
const updateService = dispatch => async({name, price,photo, description, available, id,}) => {
    try{
        const response = await instance.post('/api/Service/update',{
            name,
            price,
            description,
            photo,
            available,
            id,
        });
    }catch(error){
        dispatch({ type: 'add_error' });
    }
};
const deleteService = dispatch => async({id})=>{
    try{
        const response = await instance.post('/api/Service/delete',{id});
        dispatch({type: 'deleteService', action: response.data});
    }catch(error){
        dispatch({ type: 'add_error' });
    }
}
export const { Context, Provider } = createDataContext(
    serviceReducer, 
    { saveService, filterService, updateService, deleteService }, 
    {errorMessage: '', category: '', name: '', price: '', photo: '', description: ''}
);