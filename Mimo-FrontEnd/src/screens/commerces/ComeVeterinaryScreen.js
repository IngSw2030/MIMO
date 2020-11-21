import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { withNavigation } from 'react-navigation';
import VeterinaryList from '..//../components/veterinaryComponent';
import { Context as VetContext } from '../../context/VetContext';

const ComVeterinaryScreen = ({navigation}) => {
    const { state, getMyVets } = useContext(VetContext);
    
    useEffect(() => {
        getMyVets();
        console.log(state.myVets);
    }, []);

    

    const [refreshing, setRefreshing] = React.useState(false);
	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		getMyVets().then(() => setRefreshing(false));
	}, []);

    return (
        <View style={styles.body}>            
            <FlatList
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                data={state.myVets}
                keyExtractor={result => result._id}
                renderItem={({ item }) => {
                    return <VeterinaryList veterinary={item} goTo={'ComVeterinaryProfile'}/>;
                }}
                ListFooterComponent={
                    <TouchableOpacity style = {styles.buttonContainer} onPress={() => navigation.navigate('ComAddVeterinary')}>
					    <Text style={styles.buttonText}>Agregar Veterinaria</Text>
                    </TouchableOpacity>    
                }
                ListHeaderComponent={<Text style={styles.tituloPantalla}>Veterinarias</Text>}
            />
        </View>
    )
}
styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFF7BB',
        flex: 1,
    },
    buttonContainer:{
        backgroundColor: "#FF9AA2",
        minHeight: 50,
        width: 350,
        borderRadius: 25,
		alignSelf: 'center',
		alignContent: 'center',
		margin: 10
    },
    buttonText:{
        fontSize: 32,
        textAlign: 'center'
    },
    tituloPantalla: {
		fontSize:38,
		fontWeight: 'bold',
		paddingTop: 20,
		paddingHorizontal: 20
	},
});

export default withNavigation(ComVeterinaryScreen);