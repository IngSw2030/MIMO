import React, { useContext, useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { withNavigation } from 'react-navigation';
import VetComponent from '../../../components/vetComponentDetail';
import WideListComponent from '../../../components/wideListComponent'
import VeterinaryList from '../../../components/veterinaryList'
import { Context as VetContext } from '../../../context/VetContext';
import SearchBar from '../../../components/searchBar';
import useSearch from '../../../hooks/useResultsProduct';
import { ScrollView } from 'react-native-gesture-handler';

const VeterinariesScreen = () => {
    const { state, getAllVets } = useContext(VetContext);

    useEffect(() => {
        getAllVets();
    }, [])

    return (
        <View style={styles.body}>
            <View style={styles.searchBarStyle}>
                <SearchBar />
            </View>
            <ScrollView>
                <Text style={styles.tituloPantalla}>Veterinarias</Text>
                <View >
                    <FlatList
                        data={state.veterinarias}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => {
                            return <VeterinaryList veterinary={item} />;
                        }}
                    />
                </View>
            </ScrollView>

        </View>
    )
};
const styles = StyleSheet.create({
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