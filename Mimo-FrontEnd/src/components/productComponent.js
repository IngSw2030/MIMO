import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { withNavigation } from 'react-navigation';

const ProductComponent = (props)=>{
    return(
        <View style={styles.viewStyle}>
            <TouchableOpacity
                style = {styles.buttonStyle}
            >
                <Image style={styles.imageStyle}/>
                <Text style={styles.nameStyle}>{props.nombre}</Text>
                <Text style={styles.priceStyle}>{props.precio}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor: '#E8916C',
        height: 170,
        width: 100, 
        borderRadius:20
    },
    imageStyle:{
        height: 90,
        width: 70,
        alignSelf: "center"
    },
    nameStyle:{
        marginLeft: 10,
        marginTop: 5,
        fontWeight: "bold"
    },
    priceStyle:{
        marginLeft:15
    },
    viewStyle:{
        marginLeft:15,
        marginTop:15
    }
});

export default withNavigation(ProductComponent)