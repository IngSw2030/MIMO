//API
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import ngrokAddr from '../../ngrokConfig';

const instance = axios.create({
	baseURL: ngrokAddr.db, 
});

//para poder utilizar las funciones que necesitan autorizacion
instance.interceptors.request.use(
	async config => {
		const token = await AsyncStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	}
);

export default instance;
