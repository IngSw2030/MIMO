import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, LogBox, RefreshControl } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as PostContext } from '../../../context/PostContext';
import PostComponent from '../../../components/postComponent';
import SearchBar from '../../../components/searchBar';
import useResults from '../../../hooks/useResultsPost';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Context as UserContext } from '../../../context/UserContext';
import { navigate } from '../../../navigationRef';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
const PostScreen = ({ navigation }) => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { myPosts } = useContext(PostContext);
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();
	const { state, myPinnedPosts } = useContext(UserContext);

	useEffect(() => {

		myPosts();
		myPinnedPosts();
		navigation.addListener('willFocus', async () => {
			await searchApi();
			await searchApi();
		});

		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);

	const [refreshing, setRefreshing] = React.useState(false);
	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		searchApi('', '').then(() => setRefreshing(false));
	}, []);

	return (
		<View style={styles.general}>
			<SearchBar
				term={term}
				onTermChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => searchApi(term)}
			/>
			<ScrollView prop nestedScrollEnabled={true}>
				<Text style={styles.titles}>¿Qué quieres hacer hoy?</Text>
				<View style={styles.options}>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('PinnedPosts');
						}}
					>
						<MaterialCommunityIcons name='pin-outline' size={55} color='black' style={styles.pinnedButton} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('MyPosts');
						}}
					>
						<FontAwesome name="user-o" size={49} color="black" style={styles.myPostsButton} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							navigate('AddPost');
						}}
					>
						<MaterialCommunityIcons name='plus' size={55} color='black' style={styles.createButton} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('RecommendedPost');
						}}
					>
						<MaterialCommunityIcons name='lightbulb-outline' size={55} color='black' style={styles.recommendButton} />
					</TouchableOpacity>
				</View>
				<Text style={styles.titles}>Posts</Text>
				<View>
					<FlatList
						nestedScrollEnabled={true}
						refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
						showsVerticalScrollIndicator={false}
						data={results}
						keyExtractor={(result) => result._id}
						renderItem={({ item }) => {
							return <PostComponent post={item} />
						}}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	general: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF7BB',
	},
	titles: {
		fontSize: 28,
		fontWeight: 'bold',
		padding: 15,
	},
	options: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	pinnedButton: {
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
		backgroundColor: '#9FCAE2',
	},
	myPostsButton: {
		borderRadius: 40,
		borderColor: 'black',
		borderWidth: 0,
		padding: 15,
		paddingHorizontal: 19,
		backgroundColor: '#BCDB89',
	},
	createButton: {
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
		backgroundColor: '#FF9AA2',
	},
	recommendButton: {
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
		backgroundColor: '#BAA0F2',
	},
});

export default withNavigation(PostScreen);
