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
import ComAddServiceScreen from './src/screens/commerces/ComAddServiceScreen';
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
import ComEditServiceScreen from './src/screens/commerces/ComEditServiceScreen';

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
import SigninScreen from './src/screens/authScreens/SignInScreen';
import SignupScreen from './src/screens/authScreens/SignUpScreen';
test('HomeScreen se renderiza correctamente', () => {
    const tree = HomePageScreen;
    expect(tree).toMatchSnapshot();
});
test('ComHomeScreen se renderiza correctamente', () => {
    const tree = ComHomeScreen;
    expect(tree).toMatchSnapshot();
});
test('VeterinariesScreen se renderiza correctamente', () => {
    const tree = VeterinariesScreen;
    expect(tree).toMatchSnapshot();
});
test('SigninScreen se renderiza correctamente', () => {
    const tree = SignInScreen;
    expect(tree).toMatchSnapshot();
});

test('SignupScreen se renderiza correctamente', () => {
    const tree = SignUpScreen;
    expect(tree).toMatchSnapshot();
});

test('PetScreen se renderiza correctamente', () => {
    const tree = PetsScreen;
    expect(tree).toMatchSnapshot();
});
test('StartScreen se renderiza correctamente', () => {
    const tree = StartScreen;
    expect(tree).toMatchSnapshot();
});
test('ReviewScreen se renderiza correctamente', () => {
    const tree = ReviewScreen;
    expect(tree).toMatchSnapshot();
});
test('ChatScreen se renderiza correctamente', () => {
    const tree = ChatScreen;
    expect(tree).toMatchSnapshot();
});
test('JoinScreen se renderiza correctamente', () => {
    const tree = JoinScreen;
    expect(tree).toMatchSnapshot();
});
test('FriendListScreen se renderiza correctamente', () => {
    const tree = FriendListScreen;
    expect(tree).toMatchSnapshot();
});
test('PostScreen se renderiza correctamente', () => {
    const tree = PostScreen;
    expect(tree).toMatchSnapshot();
});
test('PostDetailScreen se renderiza correctamente', () => {
    const tree = PostDetailScreen;
    expect(tree).toMatchSnapshot();
});
test('AddPostScreen se renderiza correctamente', () => {
    const tree = AddPostScreen;
    expect(tree).toMatchSnapshot();
});
test('myPostScreen se renderiza correctamente', () => {
    const tree = myPostsScreen;
    expect(tree).toMatchSnapshot();
});
test('pinnedPostsScreen se renderiza correctamente', () => {
    const tree = pinnedPostsScreen;
    expect(tree).toMatchSnapshot();
});
test('recommendedPostsScreen se renderiza correctamente', () => {
    const tree = recommendedPostsScreen;
    expect(tree).toMatchSnapshot();
});
test('CommentsScreen se renderiza correctamente', () => {
    const tree = CommentsScreen;
    expect(tree).toMatchSnapshot();
});
test('ComAddProductScreen se renderiza correctamente', () => {
    const tree = ComAddProductScreen;
    expect(tree).toMatchSnapshot();
});
test('ComAddServiceScreen se renderiza correctamente', () => {
    const tree = ComAddServiceScreen;
    expect(tree).toMatchSnapshot();
});
test('ComVeterinaryScreen se renderiza correctamente', () => {
    const tree = ComVeterinaryScreen;
    expect(tree).toMatchSnapshot();
});
test('ComAddVeterinaryScreen se renderiza correctamente', () => {
    const tree = ComAddVeterinaryScreen;
    expect(tree).toMatchSnapshot();
});
test('ComNotificationsScreen se renderiza correctamente', () => {
    const tree = ComNotificationsScreen;
    expect(tree).toMatchSnapshot();
});
test('ComProductScreen se renderiza correctamente', () => {
    const tree = ComProductScreen;
    expect(tree).toMatchSnapshot();
});
test('ComServiceDetailsScreen se renderiza correctamente', () => {
    const tree = ComServiceDetailsScreen;
    expect(tree).toMatchSnapshot();
});
test('ComServiceScreen se renderiza correctamente', () => {
    const tree = ComServiceScreen;
    expect(tree).toMatchSnapshot();
});
test('ComSettingsScreen se renderiza correctamente', () => {
    const tree = ComSettingsScreen;
    expect(tree).toMatchSnapshot();
});
test('ComVeterinaryProfileScreen se renderiza correctamente', () => {
    const tree = ComVeterinaryProfileScreen;
    expect(tree).toMatchSnapshot();
});
test('ComEditProductScreen se renderiza correctamente', () => {
    const tree = ComEditProductScreen;
    expect(tree).toMatchSnapshot();
});
test('ComEditServiceScreen se renderiza correctamente', () => {
    const tree = ComEditServiceScreen;
    expect(tree).toMatchSnapshot();
});
test('AddPetScreen se renderiza correctamente', () => {
    const tree = AddPetScreen;
    expect(tree).toMatchSnapshot();
});
test('ProductScreen se renderiza correctamente', () => {
    const tree = ProductScreen;
    expect(tree).toMatchSnapshot();
});
test('ProductDetailsScreen se renderiza correctamente', () => {
    const tree = ProductDetailsScreen;
    expect(tree).toMatchSnapshot();
});
test('UserProfileScreen se renderiza correctamente', () => {
    const tree = UserProfileScreen;
    expect(tree).toMatchSnapshot();
});
test('UserSettingsScreen se renderiza correctamente', () => {
    const tree = UserSettingsScreen;
    expect(tree).toMatchSnapshot();
});
test('HistoryScreen se renderiza correctamente', () => {
    const tree = HistoryScreen;
    expect(tree).toMatchSnapshot();
});
test('ShopingCartScreen se renderiza correctamente', () => {
    const tree = ShopingCartScreen;
    expect(tree).toMatchSnapshot();
});
test('AquariumCleanerScreen se renderiza correctamente', () => {
    const tree = AquariumCleanerScreen;
    expect(tree).toMatchSnapshot();
});
test('GroomingScreen se renderiza correctamente', () => {
    const tree = GroomingScreen;
    expect(tree).toMatchSnapshot();
});
test('MassagesScreen se renderiza correctamente', () => {
    const tree = MassagesScreen;
    expect(tree).toMatchSnapshot();
});
test('PetSittingScreen se renderiza correctamente', () => {
    const tree = PetSittingScreen;
    expect(tree).toMatchSnapshot();
});
test('PetWalkerScreen se renderiza correctamente', () => {
    const tree = PetWalkerScreen;
    expect(tree).toMatchSnapshot();
});
test('ServiceDetailsScreen se renderiza correctamente', () => {
    const tree = ServiceDetailsScreen;
    expect(tree).toMatchSnapshot();
});
test('ServicesScreen se renderiza correctamente', () => {
    const tree = ServicesScreen;
    expect(tree).toMatchSnapshot();
});
test('VeterinaryProfileScreen se renderiza correctamente', () => {
    const tree = VeterinaryProfileScreen;
    expect(tree).toMatchSnapshot();
});
test('LoadingScreen se renderiza correctamente', () => {
    const tree = LoadingScreen;
    expect(tree).toMatchSnapshot();
});
test('SigninScreen se renderiza correctamente', () => {
    const tree = SigninScreen;
    expect(tree).toMatchSnapshot();
});
test('SignupScreen se renderiza correctamente', () => {
    const tree = SignupScreen;
    expect(tree).toMatchSnapshot();
});
