import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import WideListComponent from '../../../components/wideListComponent';
import usePostID from '../../../hooks/usePostID';
import { Context as PostContext } from '../../../context/PostContext';
const PostScreen = () => {
	//PurchaseListComponent invoca un PurchaseComponent, pasando el id como propo
	const { state: posts } = useContext(PostContext);
	const PostComponent = usePostID;

	return (
		<View style={{ flex: 1, backgroundColor: '#EDDF98', justifyContent: 'center', alignItems: 'stretch' }}>
			<Text>Pantalla de Posts</Text>
			<WideListComponent title='Pantalla de Posts' componentToRender={PostComponent} list={posts} />
		</View>
	);
};

export default withNavigation(PostScreen);
