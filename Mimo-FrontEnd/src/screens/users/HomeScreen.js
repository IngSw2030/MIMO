import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
    const imgSource = require('../../../assets/mimo.png')
    return (
        <View>
            <Image style = {styles.imageStyle}  source= {imgSource} />
            <Text style={styles.textStyle}> Que buscas hoy? </Text> 
            <View style={styles.generalView}>
                <TouchableOpacity >
                    <View style={styles.viewStyle1}/>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.viewStyle2}/>
                </TouchableOpacity>
            </View>
            <View style={styles.generalView}>
                <TouchableOpacity >
                    <View style={styles.viewStyle1}/>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.viewStyle2}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle:{
        height: 255,
        width:255,
        alignSelf:'center'
    },
    textStyle:{
        fontSize: 20,
        fontWeight:'bold',
        marginLeft:15
    },
    viewStyle1:
    {
        marginLeft:15,
        marginTop:15,
        height:150,
        width:150,
        backgroundColor: 'red',
        borderRadius: 15,
    },
    viewStyle2:
    {
        marginLeft:15,
        marginTop:15,
        height:150,
        width:150,
        backgroundColor: 'blue',
        borderRadius: 15,
    },
    generalView:{
        flexDirection: 'row'
    }

});
export default HomeScreen