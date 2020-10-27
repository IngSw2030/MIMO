import React, { useContext } from 'react';
import { Context as PostContext } from '../context/PostContext';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import useProductName from '../hooks/useProductName';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const PostComponent = props => {
	const post = props.post;
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
					{post.title} {'  '}
				</Text>
				<Text style={styles.postInfo}>
					{post.content} {'  '}
				</Text>
			</TouchableOpacity>
			{/* <Image source={post.imagen} style={styles.imageStyle} /> */}
		</View>
	);
};
const styles = StyleSheet.create({
	titleStyle: {
		alignSelf: 'flex-start',
		fontWeight: 'bold',
		fontSize: 24,
	},
	tagsStyle: {
		backgroundColor: '#E871F5',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#E871F5',
		borderWidth: 2,
		marginRight: 3,
		textAlign: 'center',
	},
	pageStyle: {
		backgroundColor: '#E8778B',
		margin: 5,
		flexDirection: 'row',
		borderRadius: 20,
		flexWrap: 'wrap',
		borderColor: '#E8778B',
		borderWidth: 10,
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
