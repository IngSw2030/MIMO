import React, { useContext, useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import WideListComponent from '../../../components/wideListComponent'
import VeterinaryList from '../../../components/veterinaryComponent'
import { Context as VetContext } from '../../../context/VetContext';
import SearchBar from '../../../components/searchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import useResults from '../../../hooks/useResultsVet';

const VeterinariesScreen = () => {
    const { state, getAllVets } = useContext(VetContext);
    //const results = state.veterinarias;
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View style={styles.body}>
            <View style={styles.searchBarStyle}>
                <SearchBar 
                    term={term}
                    onTermChange={(newTerm) => setTerm(newTerm)}
                    onTermSubmit={() => searchApi(term)}
                />
            </View>
            <FlatList
                data={results}
                keyExtractor={result => result.photo}
                renderItem={({ item }) => {
                    return <VeterinaryList veterinary={item} goTo={'VeterinaryProfile'}/>;
                }}
                ListFooterComponent={
                    <TouchableOpacity style={styles.botonCargar} onPress={() => getAllVets({ initial: state.initial, limit: 10 })}>
                        <Text style={{ textAlign: 'center', fontSize: 25 }}>Más resultados </Text>
                    </TouchableOpacity>
                }
                ListHeaderComponent={<Text style={styles.tituloPantalla}>Veterinarias</Text>}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    botonCargar: {
        backgroundColor: '#B8DC7D',
        marginBottom: 10,
        marginHorizontal: 15,
        borderRadius: 25,
        paddingVertical: 5
    },
    body: {
        backgroundColor: '#FFF7BB',
        flex: 1,
    },
    searchBarStyle: {
        flexShrink: 0,
        marginTop: 10,
    },
    tituloPantalla: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});

export default withNavigation(VeterinariesScreen);