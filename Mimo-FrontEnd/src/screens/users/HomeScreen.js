import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const imgSource = require('../../../assets/mimo.png')
    return (
        <View>
            <Text>Pantalla de HomeScreen</Text>
            <Image style = {styles.imageStyle}  source= {imgSource}/>
            <Text> hola mundo </Text> 
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle:{
        height: 255,
        width:255
    }

});
export default HomeScreen