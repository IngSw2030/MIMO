import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import {
    Feather,
    MaterialCommunityIcons,
    FontAwesome
} from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.viewStyle}>
            <View style={styles.barStyle}>
                <Feather name="search" style={styles.iconStyle} />
                <TextInput
                    placeholder="Busca algo"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    value={term}
                    onChangeText={(newTerm) => onTermChange(newTerm)}
                    onEndEditing={() => onTermSubmit()} />
            </View>
            <View style={styles.buttonStyle}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="filter-outline" style={styles.iconsExtraStyle} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="sort" style={styles.iconsExtraStyle} />
                </TouchableOpacity>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({

    viewStyle: {
        flexDirection: "row",

    },

    barStyle: {
        marginTop: 25,
        marginBottom: 10,
        backgroundColor: "#EDDF98",
        height: 35,
        borderRadius: 74.4,
        marginLeft: 10,
        flexDirection: "row",
        flex: 1,
    },

    buttonStyle: {
        marginTop: 25,
        marginBottom: 10,
        height: 30,
        marginHorizontal: 9,
        flexDirection: "row",
    },

    inputStyle: {
        color: "#000",
        fontSize: 18,
    },

    iconStyle: {
        color: "#000",
        fontSize: 25,
        alignSelf: "center",
        marginHorizontal: 15,
    },

    iconsExtraStyle: {
        color: "#000",
        fontSize: 27,
        alignSelf: "center",
        marginHorizontal: 7,
    },
});

export default SearchBar;