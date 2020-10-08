import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import WideListComponent from '../../../components/wideListComponent';
import usePostID from '../../../hooks/usePostID';
import { Context as PostContext } from '../../../context/PostContext';
const PostScreen = ({ navigation }) => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { state: posts } = useContext(PostContext);
	const PostComponent = usePostID;

	return (
		<View style={{ flex: 1, backgroundColor: '#FFF7BB', justifyContent: 'center', alignItems: 'stretch' }}>
			<Text>Pantalla de Posts</Text>
			<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5 }}>
				<Button title=' + ' onPress={() => navigation.navigate('AddPost')} />
				<Button title=' Tag1 ' />
				<Button title=' Tag2 ' />
			</View>
			<WideListComponent title='Pantalla de Posts' componentToRender={PostComponent} list={posts} />
		</View>
	);
};

export default withNavigation(PostScreen);
