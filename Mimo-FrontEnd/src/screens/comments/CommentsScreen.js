import React, {useState, useContext, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput,FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigate } from '../../navigationRef';
import { Context as CommentContext } from '../../context/CommentContext';
import { FontAwesome5 } from '@expo/vector-icons';
import CommentComponent from '../../components/commentComponent';

const commentsScreen = ({ navigation }) => {

	const id = navigation.getParam('id');
	const [comment, setComment] = useState('');
	const {state, saveComment} = useContext(CommentContext);

	const [flag, setFlag] = useState(false);

	const handleSend = () => {
		saveComment({content: comment, idPost: id});
		setComment('');
		setFlag(true);
	}

	useEffect(() => {
	}, [handleSend])

	return (
		<View style={styles.general}>
			<Text style={styles.titles}> Comentarios </Text>
			<View style={styles.topPart}>
				<View style = {styles.inputComment}>
					<TextInput 
						placeholder="Escribe tu comentario"
						placeholderTextColor="#000"
						style={styles.inputCommentText}
						value={comment}
						editable={true}
      					multiline={true}
						onChangeText={(newComment) => setComment(newComment)}
					/>
				</View>
				<TouchableOpacity onPress={()=>{
					handleSend();
				}}>
					<View style={styles.send}>
						<FontAwesome5 name="paper-plane" size={25} color="black" />
					</View>
				</TouchableOpacity>
			</View>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={state.comments}
				keyExtractor={(result) => result._id}
				renderItem={({ item }) => {
					return <CommentComponent post = {item}/>
				}}
			/>
		</View>
	);
};


styles = StyleSheet.create({
	general: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF7BB',
	},
	titles: {
		fontSize:34,
		fontWeight: 'bold',
		padding: 15,
	},
	inputComment:{
        backgroundColor: "#7E9FD1",
        minHeight: 50,
        width: 310,
        borderRadius: 25,
		alignSelf: 'center',
		flexDirection: 'row',
		alignContent: 'center',
		margin: 10
	},
	inputCommentText:{
		justifyContent: 'flex-start',
		padding: 8,
		fontSize: 18,
		fontWeight:'600',
		flexWrap: 'wrap',
		minHeight: 50,
	},
	topPart:{
		flexDirection: 'row',
	},
	send:{
		backgroundColor: "#BCDB89",
        height: 50,
        width: 50,
        borderRadius: 25,
		alignSelf: 'center',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
		marginRight: 10
	}
});

export default (commentsScreen);
