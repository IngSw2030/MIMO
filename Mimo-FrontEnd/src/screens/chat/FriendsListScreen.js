import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Context as FriendListContext } from '../../context/FriendListContext';
import { useEffect } from 'react';
import { useContext } from 'react';

export default function FriendListScreen({ navigation }) {
	const usersOnline = useSelector(state => state.usersOnline);
	const { state, getUsers } = useContext(FriendListContext);
	const friends = state.users;
	const { itemContainerStyle, avatarImgStyle, avatarNameViewStyle } = styles;
	useEffect(() => {
		getUsers();
		console.log(friends);
	}, []);
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={usersOnline}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('Chat', {
									// name: item.username,
									// userId: item.userId,
									name: item.name,
									userId: item._id,
								})
							}
						>
							<View style={itemContainerStyle}>
								<Image style={avatarImgStyle} source={{ uri: item.avatar }} />
								<View style={avatarNameViewStyle}>
									<Text style={{ fontSize: 20 }}>{item.name}</Text>
								</View>
							</View>
						</TouchableOpacity>
					);
				}}
				keyExtractor={item => item._id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	itemContainerStyle: { flex: 1, flexDirection: 'row' },
	avatarImgStyle: { width: 100, height: 100, borderRadius: 50 },
	avatarNameViewStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
