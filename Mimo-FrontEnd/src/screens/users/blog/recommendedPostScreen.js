import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Context as PetContext } from '../../../context/PetContext';
import PostComponent from '../../../components/postComponent';
import useResults from '../../../hooks/useResultsPost';

const recommendedPostsScreen = ({ navigation }) => {

    const {state, getMyPets} = useContext(PetContext);
	const [searchApi, results, errorMessage] = useResults();

	useEffect(() => {
        getMyPets();
        searchApi('', state.pets[0].species);
	}, []);
	return (
		<View style={styles.general}>
			<Text style = {styles.titles}>Nuestras recomendaciones</Text>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={results}
				keyExtractor={(result) => result._id}
				renderItem={({ item }) => {
					return <PostComponent post = {item}/>
				}}
			/>
		</View>
		
	);
};

const styles = StyleSheet.create({
	general: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF7BB',
	},
	titles: {
		fontSize:34,
		fontWeight: 'bold',
		paddingTop: 25,
		paddingHorizontal: 15,
	},
});

export default (recommendedPostsScreen);
