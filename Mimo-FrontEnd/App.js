import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { setNavigator } from './src/navigationRef';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

//redux y sockets
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
const socket = io('http://192.168.0.10:3001');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

function reducer(state = { conversations: {} }, action) {
	switch (action.type) {
		case 'users_online':
			const conversations = { ...state.conversations };
			const usersOnline = action.data;
			for (let i = 0; i < usersOnline.length; i++) {
				const userId = usersOnline[i].userId;
				if (conversations[userId] === undefined) {
					conversations[userId] = {
						messages: [],
						username: usersOnline[i].username,
					};
				}
			}
			return { ...state, usersOnline, conversations };
		case 'private_message':
			const conversationId = action.data.conversationId;
			return {
				...state,
				conversations: {
					...state.conversations,
					[conversationId]: {
						...state.conversations[conversationId],
						messages: [action.data.message, ...state.conversations[conversationId].messages],
					},
				},
			};
		case 'self_user':
			return { ...state, selfUser: action.data };
		default:
			return state;
	}
}

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
	console.log('new state', store.getState());
});

//Homes
import HomePageScreen from './src/screens/users/HomeScreen';
import ComHomeScreen from './src/screens/commerces/ComHomeScreen';

// authScreens
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignUpScreen from './src/screens/authScreens/SignUpScreen';
import StartScreen from './src/screens/authScreens/StartScreen';

// Chat
import ChatScreen from './src/screens/chat/ChatScreen';
import JoinScreen from './src/screens/chat/JoinScreen';
import FriendListScreen from './src/screens/chat/FriendsListScreen';

//Imports de comercio
import ComAccesoriesScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComAddProductScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComFoodScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComNotificationsScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComProductDetailsScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComServiceDetailsScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComServiceScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComSettingsScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComVeterinaryProfileScreen from './src/screens/commerces/ComAccesoriesScreen';

//Imports de Usuario
//pets
import AddPetScreen from './src/screens/users/pets/AddPetScreen';
import PetsScreen from './src/screens/users/pets/PetsScreen';
//products
import AccesoriesScreen from './src/screens/users/products/AccesoriesScreen';
import FoodScreen from './src/screens/users/products/FoodScreen';
import ProductDetailsScreen from './src/screens/users/products/ProductDetailsScreen';
//profile
import NotificationsScreen from './src/screens/users/profile/NotificationsScreen';
import UserProfileScreen from './src/screens/users/profile/UserProfileScreen';
import UserSettingsScreen from './src/screens/users/profile/UserSettingsScreen';
import HistoryScreen from './src/screens/users/profile/HistoryScreen';
//services
import AquariumCleanerScreen from './src/screens/users/services/AquariumCleanerScreen';
import GroomingScreen from './src/screens/users/services/GroomingScreen';
import MassagesScreen from './src/screens/users/services/MassagesScreen';
import PetSittingScreen from './src/screens/users/services/PetSittingScreen';
import PetWalkerScreen from './src/screens/users/services/PetWalkerScreen';
import ServiceDetailsScreen from './src/screens/users/services/ServiceDetailsScreen';
import ServicesScreen from './src/screens/users/services/ServicesScreen';
//veterinaries
import VeterinariesScreen from './src/screens/users/veterinaries/VeterinariesScreen';
import VeterinaryProfileScreen from './src/screens/users/veterinaries/VeterinaryProfileScreen';

const switchNavigator = createSwitchNavigator({
	loginFlow: createStackNavigator({
		Start: StartScreen,
		Signup: SignUpScreen,
		Signin: SignInScreen,
		Chat: ChatScreen,
		Join: JoinScreen,
		FriendList: FriendListScreen,
	}),

	mainFlow: createBottomTabNavigator(
		{
			Account: createStackNavigator(
				{
					UserProfile: UserProfileScreen,
					UserSettings: UserSettingsScreen,
					Notifications: NotificationsScreen,
					AddPet: AddPetScreen,
					Pets: PetsScreen,
				},
				{
					defaultNavigationOptions: {
						headerShown: false,
					},
				}
			),

			Home: createStackNavigator(
				{
					HomePage: HomePageScreen,
					Accesories: AccesoriesScreen,
					Veterinaries: VeterinariesScreen,
					Food: FoodScreen,
					Services: ServicesScreen,
					ProductDetails: ProductDetailsScreen,
					Grooming: GroomingScreen,
					Massages: MassagesScreen,
					PetSitting: PetSittingScreen,
					PetWalker: PetWalkerScreen,
					ServiceDetails: ServiceDetailsScreen,
					VeterinaryProfile: VeterinaryProfileScreen,
					AquariumCleaner: AquariumCleanerScreen,
				},
				{
					defaultNavigationOptions: {
						headerShown: false,
					},
				}
			),
			History: HistoryScreen,
		},

		{
			initialRouteName: 'Home',
			defaultNavigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ focused, horizontal, tintColor }) => {
					const { routeName } = navigation.state;
					if (routeName === 'Home') {
						return <MaterialCommunityIcons name='home' color={tintColor} size={26} />;
					}
					if (routeName === 'Gallery') {
						return <MaterialCommunityIcons name='history' size={26} color={tintColor} />;
					}
					if (routeName === 'Account') {
						return <MaterialCommunityIcons name='face-profile' size={26} color={tintColor} />;
					}
				},
			}),
			tabBarOptions: {
				activeTintColor: '#FFFFFF',
				inactiveTintColor: '#9d9fa3',
				tabStyle: {
					backgroundColor: '#5C5A59',
					borderTopColor: 'transparent',
				},
			},
		}
	),
});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<Provider store={store}>
			<App
				ref={navigator => {
					setNavigator(navigator);
				}}
			/>
		</Provider>
	);
};
