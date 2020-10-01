import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TextInputBase } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as PostContext } from '../../../context/PostContext';

const PostDetailScreen = ({ navigation }) => {
	const { state: postList } = useContext(PostContext);
	const post = postList.find(thisProduct => thisProduct.id === navigation.getParam('id'));
	//  pronto usado para los bookmarks const { addPurchase } = useContext(PurchaseContext);

	return (
		<View style={styles.pageStyle}>
			<View style={styles.productAttrStyle}>
				<Image style={styles.imageStyle} source={post.image} />
				<Text style={styles.titleStyle}>{post.titulo}</Text>
				<View style={styles.descriptionViewStyle}>
					<Text style={styles.descriptionStyle}>{post.descripcion}</Text>
				</View>
			</View>

			<View style={styles.purchaseStyle}>
				{/* <Button
					title='Comprar'
					onPress={() => {
						alert('Compra realizada con exito');
						addPurchase(post.name, quantity, totalAmount, post.image, () => navigation.navigate('History'));
					}}
				/> */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	pageStyle: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#EDDF98',
		justifyContent: 'space-between',
	},
	titleStyle: {
		fontSize: 18,
		alignSelf: 'center',
	},
	buttonStyle: {},
	productAttrStyle: {
		flexShrink: 3,
		alignItems: 'flex-start',
		flexDirection: 'column',
	},
	imageStyle: {
		resizeMode: 'contain',
		maxWidth: Dimensions.get('window').width,
		flexShrink: 2,
	},
	descriptionStyle: {
		fontWeight: 'bold',
		flexWrap: 'wrap',
	},
	descriptionViewStyle: {
		justifyContent: 'space-around',
		alignSelf: 'stretch',
		padding: 5,
	},
	purchaseStyle: {
		flexGrow: 2,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});

export default withNavigation(PostDetailScreen);
