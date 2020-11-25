import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Context as PostContext} from '../context/PostContext';

const MyPostsComponent = props => {
	const post = props.post;
    const {deletePost, myPosts} = useContext(PostContext);

	return (
		<View style={styles.pageStyle}>
			<View style={styles.buttonStyle}> 
				<TouchableOpacity
					
					onPress={() =>
						props.navigation.navigate('PostDetails', {
							id: post,
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
						<Text>{post.idUser.name} {'  '}</Text>
						<Text>{post.dateCreated.slice(0, 10)} {post.dateCreated.slice(11, 16)} {'  '}</Text>
                    </View>
                    <View style = {styles.icons}>
                        <TouchableOpacity 
                            onPress = {async() =>{ 
                                
                                await deletePost({id: post._id});
                                myPosts();
                            }}
                        >
                            <FontAwesome5 name='trash' size={25} color='black'style={{padding: 4}}/>
                        </TouchableOpacity>
                    </View>
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
	postDescription: {
		fontSize: 20,
		margin: 4,
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-between'
    },
    icons:{
        flexDirection: 'row',
        justifyContent:'flex-start',
    }
});

export default withNavigation(MyPostsComponent);
