import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const CommentComponent = props => {

	const comment = props.post;

	return (
		<View style={styles.pageStyle}>
			<Text style={styles.postDescription}>
				{comment.content}{'  '}
			</Text>
			<View style={styles.info}>
				<Text style={{ fontSize: 16 }}> {comment.idUser.name} {'  '}</Text>
				<Text style={{ fontSize: 14 }}>{comment.dateCreated.slice(0, 10)} {comment.dateCreated.slice(11, 16)} {'  '}</Text>
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
		backgroundColor: '#B0EFEF',
		margin: 10,
		flexDirection: 'column',
		borderRadius: 25,
		padding: 12
	},
	postDescription: {
		fontSize: 20,
		margin: 4,
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
});

export default (CommentComponent);
