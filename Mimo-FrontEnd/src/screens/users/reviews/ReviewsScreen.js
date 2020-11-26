import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import StarRating from 'react-native-star-rating';
import { FontAwesome } from '@expo/vector-icons';
import { Context as ReviewContext } from '../../../context/ReviewContext';
import { Feather } from '@expo/vector-icons';

const ReviewsScreen = ({ navigation }) => {
    const tipo = navigation.getParam('tipo');
    const calificacion = navigation.getParam('calificacion');
    const id = navigation.getParam('id');
    const { state, getVetReviews, addVetReview, getServiceReviews, addServiceReview} = useContext(ReviewContext);
    const mimo = require('../../../../assets/mimo.png')

    //estrellitas
    const [comentario, setComentario] = useState('');
    const [generalStarCount, setgeneralStarCount] = useState(calificacion);
    const [miCalificacion, setMiCalificacion] = useState(3);
    const [escribirComentario, setEscribirComentario] = useState(0);
    const [cambio, setCambio] = useState(false);

    const onGeneralStarRatingPress = (ranting) => {
        setgeneralStarCount(ranting);
    }

    useEffect(() => {
        console.log("tipo en Review screen", tipo);
        tipo!="service" ?
            getVetReviews({ idVet: id })
        : getServiceReviews({ idService: id })
        
    }, [cambio])

    return (

        <View style={styles.body}>

            {
                escribirComentario == 0
                    ?
                    <TouchableOpacity
                        style={styles.botonEscribirComentario}
                        onPress={() => setEscribirComentario(true)}
                    >
                        <Text style={styles.textoBoton}>Escribir comentario</Text>
                    </TouchableOpacity>
                    :
                    <View style={styles.inputStyle}>
                        <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center' }}>
                            <Text style={{
                                fontWeight: 'bold', textAlign: 'center', fontSize: 20
                            }}>Escribe una pequeña reseña sobre tu experiencia</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setEscribirComentario(0);
                                }}>
                                <Feather name="x" size={35} color="black" />
                            </TouchableOpacity>
                        </View>

                        < TextInput
                            placeholder="Escribe tus comentario"
                            placeholderTextColor="#000"
                            autoCapitalize="sentences"
                            value={comentario}
                            onChangeText={(newComentario) => setComentario(newComentario)}
                            style={{ flex: 1, textAlignVertical: 'top', fontSize: 17 }}
                            multiline={true}
                            maxLength={250}
                        />
                        <Text style={{
                            fontWeight: 'bold', fontSize: 20
                        }}>Calificanos</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                            <StarRating
                                maxStars={5}
                                rating={miCalificacion}
                                starSize={40}
                                selectedStar={rating => setMiCalificacion(rating)}
                                buttonStyle={{ margin: 8 }}
                            />
                            <TouchableOpacity
                                style={styles.enviarReview}
                                onPress={async() => {
                                    !tipo ?
                                        await addVetReview({ comment: comentario, score: miCalificacion, idVet: id })
                                    : await addServiceReview({ comment: comentario, score: miCalificacion, idService: id });
                                    setCambio(!cambio);
                                    setEscribirComentario(0);
                                }}
                            >
                                <FontAwesome name="send-o" size={30} color="black" />
                            </TouchableOpacity>
                        </View>


                    </View>
            }
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '13%', marginVertical: '3%' }}>
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
                                !item.idUser.photo
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
                                        starSize={35}
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
    enviarReview: {
        backgroundColor: '#B0EFEF',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 5
    },
    textoBoton: {
        fontSize: 25,
        textAlign: 'center'
    },
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
    botonEscribirComentario: {
        backgroundColor: "#EDDF98",
        fontSize: 18,
        marginHorizontal: 15,
        borderRadius: 25,
        width: '90%',
        height: 40,
    },
    inputStyle: {
        backgroundColor: "#EDDF98",
        fontSize: 18,
        marginHorizontal: 15,
        paddingLeft: 5,
        borderRadius: 25,
        width: '90%',
        height: 250,
        flexDirection: 'column'
    },
    iconStyle: {
        height: 30,
        width: 30,
        marginHorizontal: 8
    },
})

export default withNavigation(ReviewsScreen);
