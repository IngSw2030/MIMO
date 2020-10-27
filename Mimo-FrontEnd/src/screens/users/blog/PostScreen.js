import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as PostContext } from '../../../context/PostContext';
import PostComponent from '../../../components/postComponent';
import SearchBar from '../../../components/searchBar';
import useResults from '../../../hooks/useResultsPost';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const PostScreen = ({ navigation }) => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { state: posts,  } = useContext(PostContext);
	const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

	return (
		<View style={styles.general}>
			<SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
			<Text style = {styles.titles}>¿Qué quieres hacer hoy?</Text>
			<View style = {styles.options}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('pinnedPosts');
					}}
				>
					<MaterialCommunityIcons name='pin-outline' size={50} color='black' style={styles.pinnedButton} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('myPosts');
					}}
				>
					<MaterialCommunityIcons name='hammer' size={50} color='black' style={styles.myPostsButton} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('addPost');
					}}
				>
					<MaterialCommunityIcons name='plus' size={50} color='black' style={styles.createButton} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('pinnedPosts');
					}}
				>
					<MaterialCommunityIcons name='lightbulb-outline' size={50} color='black' style={styles.recommendButton} />
				</TouchableOpacity>
			</View>
			<Text style={styles.titles}>Nuevos Posts</Text>
			<FlatList
                showsVerticalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result._id}
                renderItem={({ item }) => {
					return <PostComponent post = {item}/>
				}}
			/>
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
		fontSize:28,
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
		borderRadius: 50,
		borderColor: 'black',
		borderWidth: 0,
		padding: 10,
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
		backgroundColor: '#E8916C',
	},
});

export default withNavigation(PostScreen);
