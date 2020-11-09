import React, { Sidebar } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesome5 } from '@expo/vector-icons';
//Homes
import HomePageScreen from './src/screens/users/HomeScreen';
import ComHomeScreen from './src/screens/commerces/ComHomeScreen';

// authScreens
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignUpScreen from './src/screens/authScreens/SignUpScreen';
import StartScreen from './src/screens/authScreens/StartScreen';

//reviews
import ReviewScreen from './src/screens/users/reviews/ReviewsScreen';

// Chat
import ChatScreen from './src/screens/chat/ChatScreen';
import JoinScreen from './src/screens/chat/JoinScreen';
import FriendListScreen from './src/screens/chat/FriendsListScreen';

//Blog/Post
import PostScreen from './src/screens/users/blog/PostScreen';
import PostDetailScreen from './src/screens/users/blog/PostDetailScreen';
import AddPostScreen from './src/screens/users/blog/AddPostScreen';
import myPostsScreen from './src/screens/users/blog/myPostsScreen';
import pinnedPostsScreen from './src/screens/users/blog/pinnedPostsScreen';
import recommendedPostsScreen from './src/screens/users/blog/recommendedPostScreen';
//Comments
import CommentsScreen from './src/screens/users/blog/CommentsScreen';

//Imports de comercio
import ComAddProductScreen from './src/screens/commerces/ComAddProductScreen';
import ComVeterinaryScreen from './src/screens/commerces/ComeVeterinaryScreen';
import ComAddVeterinaryScreen from './src/screens/commerces/ComAddVeterinaryScreen';
import ComNotificationsScreen from './src/screens/commerces/ComNotificationsScreen';
import ComProductDetailsScreen from './src/screens/commerces/ComProductDetailsScreen';
import ComProductScreen from './src/screens/commerces/ComProductScreen';
import ComServiceDetailsScreen from './src/screens/commerces/ComServiceDetailsScreen';
import ComServiceScreen from './src/screens/commerces/ComServiceScreen';
import ComSettingsScreen from './src/screens/commerces/ComSettingsScreen';
import ComVeterinaryProfileScreen from './src/screens/commerces/ComVeterinaryProfileScreen';
import ComEditProductScreen from './src/screens/commerces/ComEditProductScreen';

//Imports de Usuario
//pets
import AddPetScreen from './src/screens/users/pets/AddPetScreen';
import PetsScreen from './src/screens/users/pets/PetsScreen';
//products
import ProductScreen from './src/screens/users/products/ProductScreen';
import ProductDetailsScreen from './src/screens/users/products/ProductDetailsScreen';
//profile
import UserProfileScreen from './src/screens/users/profile/UserProfileScreen';
import UserSettingsScreen from './src/screens/users/profile/UserSettingsScreen';
import HistoryScreen from './src/screens/users/profile/HistoryScreen';
import ShopingCartScreen from './src/screens/users/profile/ShopingCartScreen';
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

import LoadingScreen from './src/screens/authScreens/LoadingScreen';
import { navigate } from './src/navigationRef';

const ComercioHomeNavigation = createStackNavigator(
	{
		//Pantallas Comercio
		comercHome: ComHomeScreen,
		ComAddProduct: ComAddProductScreen,
		ComVeterinary: ComVeterinaryScreen,
		ComNotifications: ComNotificationsScreen,
		ComProductDetails: ComProductDetailsScreen,
		ComProduct: ComProductScreen,
		ComServiceDetails: ComServiceDetailsScreen,
		ComService: ComServiceScreen,
		ComSettings: ComSettingsScreen,
		ComVeterinaryProfile: ComVeterinaryProfileScreen,
		ComEditProduct: ComEditProductScreen,
		ComAddVeterinary: ComAddVeterinaryScreen,

		//Pantalla Posts y Comentarios
		Post: PostScreen,
		AddPost: AddPostScreen,
		PostDetails: PostDetailScreen,
		Comments: CommentsScreen,
		MyPosts: myPostsScreen,
		PinnedPosts: pinnedPostsScreen,
		RecommendedPost: recommendedPostsScreen
	},
	{
		defaultNavigationOptions: {
			headerShown: false,
		},
		initialRouteParams: ComHomeScreen
	}
);

const UserHomeNavigation = createStackNavigator(
	{
		//Pantallas Usuario
		HomePage: HomePageScreen,
		Product: ProductScreen,
		ProductDetails: ProductDetailsScreen,
		Veterinaries: VeterinariesScreen,
		VeterinaryProfile: VeterinaryProfileScreen,
		Services: ServicesScreen,
		Grooming: GroomingScreen,
		Massages: MassagesScreen,
		PetSitting: PetSittingScreen,
		PetWalker: PetWalkerScreen,
		AquariumCleaner: AquariumCleanerScreen,
		ServiceDetails: ServiceDetailsScreen,
		ShopingCart: ShopingCartScreen,
		Reviews: ReviewScreen,
		//Pantalla Posts y Comentarios
		Post: PostScreen,
		AddPost: AddPostScreen,
		PostDetails: PostDetailScreen,
		Comments: CommentsScreen,
		MyPosts: myPostsScreen,
		PinnedPosts: pinnedPostsScreen,
		RecommendedPost: recommendedPostsScreen
	},
	{
		defaultNavigationOptions: {
			headerShown: false,
		},
		initialRouteParams: HomePageScreen
	}
);

const UserAccountNavigation = createStackNavigator(
	{
		//Pantallas Usuario
		UserProfile: UserProfileScreen,
		UserSettings: UserSettingsScreen,
		AddPet: AddPetScreen,
		Pets: PetsScreen,

		//Pantallas usuario
		Chat: ChatScreen,
		Join: JoinScreen,
		FriendList: FriendListScreen,
	},
	{
		defaultNavigationOptions: {
			headerShown: false,
		},
		initialRouteParams: UserProfileScreen
	}
);

const ComercioAccountNavigation = createStackNavigator(
	{
		//Pantallas Usuario
		UserProfile: UserProfileScreen,
		ComSettings: ComSettingsScreen,
		UserSettings: UserSettingsScreen,
		AddPet: AddPetScreen,
		Pets: PetsScreen,


		//Pantallas usuario
		Chat: ChatScreen,
		Join: JoinScreen,
		FriendList: FriendListScreen,
	},
	{
		defaultNavigationOptions: {
			headerShown: false,
		},
		initialRouteParams: UserProfileScreen
	}
);

const UserTabNavigator = createBottomTabNavigator(
	{
		Account: UserAccountNavigation,
		Home: UserHomeNavigation,
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
)

const ComercioTabNavigator = createBottomTabNavigator(
	{
		Account: ComercioAccountNavigation,
		Home: ComercioHomeNavigation,
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
)

const DrawerNavigator = createDrawerNavigator(
	{
		User: {
			screen: UserTabNavigator,
		},
		Comercio: {
			screen: ComercioTabNavigator,
		},
	},
	{
		backBehavior: 'none',
		contentComponent: Sidebar,
		drawerWidth: 0,
		drawerType: 'front',
	},
);

const login = createStackNavigator(
	{
		Start: StartScreen,
		Signup: SignUpScreen,
		Signin: SignInScreen,
		Loading: LoadingScreen,
	},
	{
		initialRouteParams: StartScreen
	}
)

const switchNavigator = createSwitchNavigator(
	{
		loginFlow: login,
		mainFlow: DrawerNavigator,
	},
	{
		initialRouteParams: 'loginFlow',
	}
);

const AppContainer = createAppContainer(switchNavigator);
export default AppContainer;
