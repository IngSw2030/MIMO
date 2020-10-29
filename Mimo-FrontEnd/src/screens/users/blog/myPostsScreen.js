import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { navigate } from '../../../navigationRef';
import { Context as PostContext } from '../../../context/PostContext';
import PostComponent from '../../../components/postComponent';


const myPostsScreen = ({ navigation }) => {

	const {state} = useContext(PostContext);

	return (
		<View style={styles.general}>
			<Text style = {styles.titles}>Mis blogs Publicados</Text>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={state.myPosts}
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
		fontSize:34,
		fontWeight: 'bold',
		paddingTop: 25,
		paddingHorizontal: 15,
	}
});

export default (myPostsScreen);
