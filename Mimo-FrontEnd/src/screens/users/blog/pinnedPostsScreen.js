import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { navigate } from '../../../navigationRef';
import { Context as UserContext} from '../../../context/UserContext';
import PostComponent from '../../../components/postComponent';


const pinnedPostsScreen = ({ navigation }) => {

	const {state} = useContext(UserContext);

	return (
		<View style={styles.general}>
			<Text style = {styles.titles}>Mis blogs Guardados</Text>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={state.pinnedPosts}
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

export default (pinnedPostsScreen);
