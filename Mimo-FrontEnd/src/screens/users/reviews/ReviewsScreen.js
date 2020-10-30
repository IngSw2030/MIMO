import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as ReviewContext } from '../../../context/ReviewContext';
import StarRating from 'react-native-star-rating';

const ReviewsScreen = ({ navigation }) => {
    const [comentario, setComentario] = useState('');
    const calificacion = navigation.getParam('calificacion');
    const id = navigation.getParam('id');
    const { state, getVetReviews } = useContext(ReviewContext);
    const mimo = require('../../../../assets/mimo.png')

    //estrellitas
    const [generalStarCount, setgeneralStarCount] = useState(calificacion);
    const [escribirComentario, setescribirComentario] = useState(0);

    const onGeneralStarRatingPress = (ranting) => {
        setgeneralStarCount(ranting);
    }

    useEffect(() => {
        getVetReviews({ idVet: id });
    }, [])

    return (

        <View style={styles.body}>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="Escribe tu comentario"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    style={styles.inputStyle}
                    value={comentario}
                    onChangeText={(newComentario) => setComentario(newComentario)}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignItems: 'center', marginLeft: '13%', marginVertical: '3%' }}>
                <Text style={{ fontSize: 18 }}>Calificacion:</Text>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={generalStarCount}
                    starSize={40}
                    selectedStar={rating => onGeneralStarRatingPress(rating)}
                />
            </View>


            <FlatList
                data={state.reviews}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: 'row', flex: 1, marginVertical: 15 }}>
                            {
                                item.idUser.photo = ""
                                    ?
                                    <Image style={styles.image} source={mimo} />
                                    :
                                    <Image style={styles.image} source={{ uri: `data:image/gif;base64,${item.idUser.photo}` }} />
                            }
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 20 }}>{item.idUser.name}  </Text>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={item.score}
                                        starSize={40}
                                    />
                                </View>
                                <Text style={{ fontSize: 18 }}>Comentario: {item.comment}</Text>
                            </View>
                        </View>
                    );
                }}
            />



        </View >
    );
}


const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginHorizontal: '4%'
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF7BB',
        paddingTop: '10%'
    },
    inputStyle: {
        backgroundColor: "#EDDF98",
        fontSize: 18,
        marginHorizontal: 15,
        borderRadius: 25,
        width: '90%',
        height: 40
    },
    iconStyle: {
        height: 30,
        width: 30,
        marginHorizontal: 8
    },
})

export default withNavigation(ReviewsScreen);
