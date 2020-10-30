import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView,Dimensions, Button, TextInputBase, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as PostContext } from '../../../context/PostContext';
import PostComponent from '../../../components/postComponent';
import { Context as UserContext} from '../../../context/UserContext';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const PostDetailScreen = ({ navigation }) => {

	const {state, pinPost, unpinPost} = useContext(UserContext);
	const [pinned, setPinned] = useState(false);

	useEffect(() => {
		if(!state.pinnedPosts.find(e => e._id === post._id)){
			
		}
		else{
			setPinned(true);
		}
	}, [pinned]);
	

	const post = navigation.getParam('id')
	return (
		<ScrollView style={styles.pageStyle}>
			<Text style = {styles.titles}>{post.title}</Text>
			{post.photo?
				<Image source={{ uri: `data:image/gif;base64,${post.photo}`}} style={styles.image}/>
				: null
			}
			<View style = {styles.info}>
				<View style = {styles.nameDate}>
					<Text>{post.idUser.name} {'  '}</Text>
					<Text>{post.dateCreated.slice(0, 10)} {post.dateCreated.slice(14, 19)} {'  '}</Text>
				</View>
				{
					pinned ? 
						<TouchableOpacity 
							onPress = {() =>{ 
								setPinned(false);
								unpinPost({idPost: post._id});
							}}
						>
							<MaterialCommunityIcons name='pin' size={30} color='black'/>
						</TouchableOpacity>
					:
						<TouchableOpacity 
							onPress = {() =>{ 
								pinPost({idPost: post._id});
								setPinned(true);
							}}
						>
							<MaterialCommunityIcons name='pin-outline' size={30} color='black'/>
						</TouchableOpacity>
				}
			</View>
			<Text style={styles.content}>{post.content}</Text>
			<TouchableOpacity  onPress={()=>{ navigation.navigate('Comments')}}>
				<View style={styles.roundedContainerStyle}>				
						<MaterialCommunityIcons style={styles.insideRounded} name='message-processing' size={30} color='black'/>				
					<Text style={styles.comments}>Ver Comentarios</Text>
				</View>
			</TouchableOpacity>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	pageStyle: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF7BB',
	},
	titles: {
		fontSize:32,
		fontWeight: 'bold',
		paddingHorizontal: 15,
		paddingTop: 30
	},
	image: {
		//resizeMode: 'contain',
		//maxWidth: Dimensions.get('window').width,
		height:300,
		width: 350,
		alignSelf: 'center',
		borderRadius: 50,
		margin: 10
	},
	info:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10,
		paddingHorizontal: 15
	},
	descriptionStyle: {
		fontWeight: 'bold',
		flexWrap: 'wrap',
	},
	content:{
		fontSize: 18,
		padding: 15
	},
	roundedContainerStyle: {
        marginTop: 10,
        backgroundColor: "#E8916C",
        height: 50,
        width: 250,
        borderRadius: 75,
        justifyContent: 'center',
		alignSelf: 'center',
		flexDirection: 'row'
	},
	insideRounded:{
		alignSelf: "center",
	},
	comments:{
		alignSelf: 'center',
		fontSize: 18,
		paddingHorizontal: 5
	}
});

export default withNavigation(PostDetailScreen);
