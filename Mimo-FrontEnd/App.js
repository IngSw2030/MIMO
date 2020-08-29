import React from 'react';
import { 
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

//Imports de comercio
import ComAccesoriesScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComAddProductScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComFoodScreen from './src/screens/commerces/ComAccesoriesScreen';
import ComHomeScreen from './src/screens/commerces/ComAccesoriesScreen';
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
import ProductDetails from './src/screens/users/products/ProductDetails';
//profile 
import NotificationsScreen from './src/screens/users/profile/NotificationsScreen';
import UserProfileScreen from './src/screens/users/profile/UserProfileScreen';
import UserSettingsScreen from './src/screens/users/profile/UserSettingsScreen';
//services
import GroomingScreen from './src/screens/users/services/GroomingScreen';
import MassagesScreen from './src/screens/users/services/MassagesScreen';
import PetSittingScreen from './src/screens/users/services/PetSittingScreen';
import PetWalkerScreen from './src/screens/users/services/PetWalkerScreen';
import ServiceDetailsScreen from './src/screens/users/services/ServiceDetailsScreen';
import ServicesScreen from './src/screens/users/services/ServicesScreen';
//veterinaries
import VeterinariesScreen from './src/screens/users/veterinaries/VeterinariesScreen';
import VeterinaryProfileScreen from './src/screens/users/veterinaries/VeterinaryProfileScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});