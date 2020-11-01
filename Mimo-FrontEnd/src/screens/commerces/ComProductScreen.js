import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Context as UserContext } from '../../context/UserContext';          
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useSearch from '../../hooks/useResultsMyProduct';
import ProductComponent from '../../components/productComponent';
import { navigate } from '../../navigationRef';

const ComProductScreen = () => {
    const mimoIcon = require('../../../assets/mimo.png');
	const questionText = 'Productos';
    const { state } = useContext(UserContext); 

    const [term, setTerm] = useState('');
    const [searchApi, results, accesories, food, cleaning, others, errorMessage] = useSearch();
    
    return (
        <View style={{ backgroundColor: '#FFF7BB', flex: 1, paddingTop: 20 }}>
            <ScrollView>
                <View style={styles.topBanner}>
                    <View style={styles.infoStyle}>
                        <Text style={{ fontWeight: 'bold' }}>Nombre: </Text>
                        <Text>{state.name} </Text>
                        <Text style={{ fontWeight: 'bold' }}>Correo: </Text>
                        <Text>{state.email} </Text>
                    </View>
                    <Image style={styles.logoStyle} source={mimoIcon} />
                </View>
                <View style={styles.topBanner}>
                    <Text style={styles.questionStyle}>{questionText}</Text>
                    <TouchableOpacity 
                        style= {styles.buttonStyle}
                        onPress = {()=>{
                            navigate('ComAddProduct');
                        }}
                    >
                        <Text style={styles.buttonText}>Agregar Producto </Text>
                        <MaterialCommunityIcons name='plus' size={30} color='black'/>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.tiposDeArticulos}>Comida</Text>
                    <View style={styles.productListStyle}>
                        <FlatList
                            data={results}
                            keyExtractor={item => item._id}
                            horizontal={true}
                            renderItem={({ item }) => {
                                return <ProductComponent product={item} pantalla={'ComProductDetails'} />;
                            }}
                        />
                    </View>
                    <Text style={styles.tiposDeArticulos}>Accesorios</Text>
                    <View style={styles.productListStyle}>
                        <FlatList
                            data={accesories}
                            keyExtractor={item => item._id}
                            horizontal={true}
                            renderItem={({ item }) => {
                                return <ProductComponent product={item} pantalla={'ComProductDetails'}/>;
                            }}
                        />
                    </View>
                    <Text style={styles.tiposDeArticulos}>Limpieza</Text>
                    <View style={styles.productListStyle}>
                        <FlatList
                            data={cleaning}
                            keyExtractor={item => item._id}
                            horizontal={true}
                            renderItem={({ item }) => {
                                return <ProductComponent product={item} pantalla={'ComProductDetails'}/>;
                            }}
                        />
                    </View>
                    <Text style={styles.tiposDeArticulos}>Otros</Text>
                    <View style={styles.productListStyle}>
                        <FlatList
                            data={others}
                            keyExtractor={item => item._id}
                            horizontal={true}
                            renderItem={({ item }) => {
                                return <ProductComponent product={item} pantalla={'ComProductDetails'} />;
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
	logoStyle: {
		height: 170,
		width: 170,
		alignSelf: 'center',
	},
	topBanner: {
        flexDirection: 'row',
        marginTop:10
	},
	parteSuperior: {
		paddingHorizontal: '5%',
		flexDirection: 'row',
		paddingTop: '10%',
		flex: 0.6,
	},
	infoStyle: {
		alignSelf: 'center',
		flex: 1,
		marginLeft: 15,
	},
	questionStyle: {
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'stretch',
		marginBottom: 5,
        marginLeft: 15,
        flex: 1
    },
    buttonText: {
		fontSize: 15,
		fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft:5
	},
	iconStyle: {
		height: 100,
		width: 100,
		alignSelf: 'center',
		flexGrow: 1,
	},
	buttonStyle: {
        flexDirection: 'row',
        backgroundColor: '#88CCF2',
        borderRadius: 25,
        height: 40,
		width: 170,
        marginRight: 10,
        padding:5
	},
	generalView: {
		justifyContent: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
		marginBottom: 10,
    },
    tiposDeArticulos: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 10,
	},
    productListStyle: {
		flex: 1,
	},
});

export default withNavigation(ComProductScreen);