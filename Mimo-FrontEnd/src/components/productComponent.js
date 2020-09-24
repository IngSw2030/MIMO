import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';


const ProductComponent = (props)=>{
    return(
        <View>
            <TouchableOpacity
                style = {styles.buttonStyle}
            >

            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor: '#E8916C',
        height: 100,
        width: 50
    }
});

export default withNavigation(ProductComponent)