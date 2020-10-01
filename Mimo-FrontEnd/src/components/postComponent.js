import React, { useContext } from 'react';
import { Context as PostContext } from '../context/PostContext';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import useProductName from '../hooks/useProductName';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const PostComponent = props => {
	const { state: posts } = useContext(PostContext);
	const post = posts.find(thisPost => thisPost.id === props.id);
	const description = useProductName(post.descripcion, 90);
	const nTags = post.tags.length;
	function renderTags(tag) {
		console.log(tag);
		return <Text style={styles.tagsStyle}>{tag} </Text>;
	}
	return (
		<View style={styles.pageStyle}>
			<TouchableOpacity
				style={styles.buttonStyle}
				onPress={() =>
					props.navigation.navigate('PostDetails', {
						id: props.id,
					})
				}
			>
				<Text style={styles.titleStyle}>
					Titulo: {post.titulo} {'  '}
				</Text>
				<Text style={styles.postInfo}>
					Descripcion: {description} {'  '}
				</Text>
				<FlatList
					numColumns={nTags}
					keyExtractor={tag => tag}
					data={post.tags}
					renderItem={({ item }) => renderTags(item)}
				/>
			</TouchableOpacity>
			{/* <Image source={post.imagen} style={styles.imageStyle} /> */}
		</View>
	);
};
const styles = StyleSheet.create({
	titleStyle: {
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: 20,
	},
	tagsStyle: {
		backgroundColor: '#73a2d1',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#317ECC',
		borderWidth: 2,
		marginRight: 3,
		textAlign: 'center',
	},
	pageStyle: {
		backgroundColor: '#E8916C',
		margin: 5,
		flexDirection: 'row',
		borderRadius: 20,
		flexWrap: 'wrap',
	},
	imageStyle: {
		marginBottom: 3,
		maxHeight: Dimensions.get('window').height / 4,
		alignSelf: 'flex-start',
		resizeMode: 'contain',
		borderRadius: 10,
		flexShrink: 1,
		margin: 2,
	},
	postInfo: {
		fontSize: 20,
		marginTop: 4,
		flexWrap: 'wrap',
		flexGrow: 1,
	},
});

export default withNavigation(PostComponent);
