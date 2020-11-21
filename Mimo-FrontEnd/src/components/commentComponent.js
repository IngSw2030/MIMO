import React, {useContext, useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const CommentComponent = props => {

    const comment = props.post;

	return (
		<View style={styles.pageStyle}>
            <Text style={styles.postDescription}>
                {comment.content}{'  '}
            </Text>
            <View style = {styles.info}>
                <View style = {styles.nameDate}>
                    <Text>{comment.idUser.name} {'  '}</Text>
                    <Text>{comment.dateCreated.slice(0, 10)} {comment.dateCreated.slice(14, 19)} {'  '}</Text>
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
	pageStyle: {
		backgroundColor: '#E8916C',
		margin: 10,
		flexDirection: 'column',
		borderRadius: 25,
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
	}
});

export default (CommentComponent);
