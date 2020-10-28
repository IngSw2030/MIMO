import React, {useContext} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Context as UserContext} from '../context/UserContext';

const PostComponent = props => {
	const post = props.post;
	const {pinPost} = useContext(UserContext);
	return (
		<View style={styles.pageStyle}>
			<View style={styles.buttonStyle}> 
				<TouchableOpacity
					
					onPress={() =>
						props.navigation.navigate('PostDetails', {
							id: props.id,
						})
					}
				>
					<Text style={styles.titleStyle}>
						{post.title} {'  '}
					</Text>
					<Text style={styles.postDescription}>
						{post.content.slice(0, 137)}{'...'} {'  '}
					</Text>
				</TouchableOpacity>
				<View style = {styles.info}>
					<View style = {styles.nameDate}>
						<Text>{post.poster} {'  '}</Text>
						<Text>{post.dateCreated.slice(0, 10)} {post.dateCreated.slice(14, 19)} {'  '}</Text>
					</View>
					<TouchableOpacity onPress = {() => pinPost({idPost: post._id})}>
						<MaterialCommunityIcons name='pin-outline' size={30} color='black'/>
					</TouchableOpacity>
				</View>
			
			</View>
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
		backgroundColor: '#E8916C',
		margin: 8,
		flexDirection: 'row',
		borderRadius: 20,
		borderColor: '#E8916C',
		borderWidth: 15,
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
	postDescription: {
		fontSize: 20,
		margin: 4,
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});

export default withNavigation(PostComponent);
