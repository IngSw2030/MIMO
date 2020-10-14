import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as PostContext } from '../../../context/PostContext';
import PostComponent from '../../../components/postComponent';
const PostScreen = ({ navigation }) => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { state: posts } = useContext(PostContext);

	return (
		<View style={{ flex: 1, backgroundColor: '#FFF7BB', justifyContent: 'center', alignItems: 'stretch' }}>
			<Text>Pantalla de Posts</Text>
			<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5 }}>
				<Button title=' + ' onPress={() => navigation.navigate('AddPost')} />
				<Button title=' Tag1 ' />
				<Button title=' Tag2 ' />
			</View>
			<View style={{ flex: 1 }}>
				<FlatList
					data={posts}
					keyExtractor={item => item.id}
					renderItem={({ item }) => {
						return <PostComponent post={item} />;
					}}
				/>
			</View>
		</View>
	);
};

export default withNavigation(PostScreen);
