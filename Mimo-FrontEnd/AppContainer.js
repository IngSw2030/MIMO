import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { FontAwesome5 } from '@expo/vector-icons';
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
//Blog/Post
import PostScreen from './src/screens/users/blog/PostScreen';
import AddPostScreen from './src/screens/users/blog/AddPostScreen';
//Imports de comercio
import ComAccesoriesScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComAddProductScreen from './src/screens/commerces/ComAddProductScreen';
import ComFoodScreen from './src/screens/commerces/ComFoodScreen';
import ComNotificationsScreen from './src/screens/commerces/ComNotificationsScreen';
import ComProductDetailsScreen from './src/screens/commerces/ComProductDetailsScreen';
import ComServiceDetailsScreen from './src/screens/commerces/ComServiceDetailsScreen';
import ComServiceScreen from './src/screens/commerces/ComServiceScreen';
import ComSettingsScreen from './src/screens/commerces/ComSettingsScreen';
import ComVeterinaryProfileScreen from './src/screens/commerces/ComVeterinaryProfileScreen';

//Imports de Usuario
//pets
import AddPetScreen from './src/screens/users/pets/AddPetScreen';
import PetsScreen from './src/screens/users/pets/PetsScreen';
//products
import ProductScreen from './src/screens/users/products/ProductScreen';
import ProductDetailsScreen from './src/screens/users/products/ProductDetailsScreen';
import ShoppingCartScreen from './src/screens/users/products/ShoppingCartScreen';
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
import PostDetailScreen from './src/screens/users/blog/PostDetailScreen';

const switchNavigator = createSwitchNavigator({
	loginFlow: createStackNavigator({
		Start: StartScreen,
		Signup: SignUpScreen,
		Signin: SignInScreen,
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
					Chat: ChatScreen,
					Join: JoinScreen,
					FriendList: FriendListScreen,
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
					Product: ProductScreen,
					Veterinaries: VeterinariesScreen,
					Services: ServicesScreen,
					ProductDetails: ProductDetailsScreen,
					ShoppingCart: ShoppingCartScreen,
					Grooming: GroomingScreen,
					Massages: MassagesScreen,
					PetSitting: PetSittingScreen,
					PetWalker: PetWalkerScreen,
					ServiceDetails: ServiceDetailsScreen,
					VeterinaryProfile: VeterinaryProfileScreen,
					AquariumCleaner: AquariumCleanerScreen,
					Post: PostScreen,
					AddPost: AddPostScreen,
					PostDetails: PostDetailScreen,
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
						return <FontAwesome5 name='home' color={tintColor} size={26} />;
					}
					if (routeName === 'History') {
						return <FontAwesome5 name='history' size={26} color={tintColor} />;
					}
					if (routeName === 'Account') {
						return <FontAwesome5 name='user-alt' size={26} color={tintColor} />;
					}
				},
			}),
			tabBarOptions: {
				activeTintColor: '#000',
				inactiveTintColor: '#555555',
				tabStyle: {
					backgroundColor: '#EDDF98',
					borderTopColor: 'transparent',
				},
			},
		}
	),
});

const AppContainer = createAppContainer(switchNavigator);
export default AppContainer;
