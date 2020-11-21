import React, { useState, useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import uploadPhoto from '../hooks/uploadPhoto';
import { navigate } from '../navigationRef';
import { Context as VetContext } from '../context/VetContext';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const SaveModifyVetComponent = (props) => {

    const data = props.data;
    const id = data._id;

    const placeName = props.name;
    const placeNumber = props.number;
    const placeAddress = props.address;
    const placeDescription = props.description;
    const placeOpen = props.openAt;
    const placeClose = props.closeAt;
    const action = props.action;
    const placePhoto = props.photo;

    const { saveVet, getMyVets, updateVet } = useContext(VetContext);

    const [name, setName] = useState(data.name);
    const [animals, setAnimals] = useState(['']);
    const [photo, setPhoto] = useState(data.photo);
    const [address, setAddress] = useState(data.address);
    const [description, setDescription] = useState(data.description);
    const [contact, setContact] = useState(data.contact)

    const [buscarImagen] = uploadPhoto();

	const [selectOpen, setSelectOpen] = useState(false);
	const [selectClose, setSelectClose] = useState(false);
	const [showOpen, setShowOpen] = useState(false);
	const [showClose, setShowClose] = useState(false);
	const [openAt, setOpenAt] = useState(new Date());
	const [closeAt, setCloseAt] = useState(new Date());

	const onChangeOpen = (event, selectedDate) => {
		const currentDate = selectedDate || openAt;
		//setShowOpen(Platform.OS === 'ios');
		setOpenAt(currentDate);
		//setTimeout(function(){
			setShowOpen(false);
			setSelectOpen(false);
		//}, 3000);
	};

	const onChangeClose = (event, selectedDate) => {
		const currentDate = selectedDate || closeAt;
		//setShowClose(Platform.OS === 'ios');
		setCloseAt(currentDate);
		//setTimeout(function(){
			setShowClose(false);
			setSelectClose(false);
		//}, 3000);
	};

	return (
		<ScrollView style = {styles.general}>

            <Text style = {styles.titles}>Crea Una Veterinaria</Text>

            <View style = {styles.inputImage}>
				<TouchableOpacity style={styles.iconsStyle} onPress={async () => {
                        const imagen = await buscarImagen();
                        setPhoto(imagen);
                    }}>
					{photo ? (
						<Image source={{ uri: `data:image/gif;base64,${photo}` }} style={styles.image}/>
                    ) : placePhoto?(
						<Image source={{ uri: `data:image/gif;base64,${placePhoto}` }} style={styles.image}/>
                        ):<View style = {styles.phStyle}>
                                <Entypo name="plus" size = {50} color = 'black'/>
                                <Entypo name="camera" size = {50} color = 'black'/>
                        </View>
                    }
				</TouchableOpacity>
			</View>

            <View style = {styles.inputContainer}>
				<TextInput 
					placeholder={placeName}
					placeholderTextColor="#000"
					style={styles.inputContainerText}
					value={name}
					onChangeText={(newName) => setName(newName)}
				/>
			</View>

            <View style = {styles.inputContainer}>
				<TextInput 
                    placeholder={placeNumber.toString()}
                    keyboardType='numeric'
					placeholderTextColor="#000"
					style={styles.inputContainerText}
					value={contact}
					onChangeText={(newContact) => setContact(newContact)}
				/>
			</View>

            <View style = {styles.inputContainer}>
				<TextInput 
					placeholder={placeAddress}
					placeholderTextColor="#000"
					style={styles.inputContainerText}
					value={address}
					onChangeText={(newAddress) => setAddress(newAddress)}
				/>
			</View>

            <View style = {styles.inputContainer}>
                <TextInput 
                    placeholder={placeDescription}
                    placeholderTextColor="#000"
                    style={styles.inputContainerText}
                    value={description}
                    editable={true}
                    multiline={true}
                    onChangeText={(newDescription) => setDescription(newDescription)}
                />
            </View>

			<TouchableOpacity style = {styles.inputContainer} 
				onPress={() => {
					setSelectOpen(!selectOpen);
					setShowOpen(!showOpen)
				}}
			>
				{
					selectOpen ?
						<View>
							{showOpen && (
								<DateTimePicker
								testID="dateTimePicker"
								value={openAt}
								mode={'time'}
								is24Hour={true}
								display="clock"
								onChange={onChangeOpen}
								/>
							)}
						</View>
					: <Text style={styles.inputContainerText}> {(placeOpen.toLocaleString("en-GB", {timeZone: "America/Bogota"})).slice(11,16)}</Text>
				}
			</TouchableOpacity>

			<TouchableOpacity style = {styles.inputContainer} 
				onPress={() =>{ 
					setSelectClose(!selectClose);
					setShowClose(!showClose)
				}}
			>

				{  
					selectClose ?
						<View>
						{showClose && (
							<DateTimePicker
								testID="dateTimePicker"
								value={closeAt}
								mode={'time'}
								is24Hour={true}
								display="clock"
								onChange={onChangeClose}
							/>
						)}
						</View>
					: <Text style={styles.inputContainerText}> {(placeClose.toLocaleString("en-GB", {timeZone: "America/Bogota"})).slice(11,16)}</Text>
				}
			</TouchableOpacity>

            <View style={styles.selectType}>
				<TouchableOpacity style={styles.typeDog} onPress={() => setAnimals([...animals,'perro'])}>
					<MaterialCommunityIcons name='dog' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.typeCat} onPress={() => setAnimals([...animals,'gato'])}>
					<MaterialCommunityIcons name='cat' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.typeFish} onPress={() => setAnimals([...animals,'pez'])}>
					<MaterialCommunityIcons name='fish' size={50} color='black' />
				</TouchableOpacity>
				<TouchableOpacity style={styles.typeRabbit} onPress={() => setAnimals([...animals,'conejo'])}>
					<MaterialCommunityIcons name='rabbit' size={50} color='black' />
				</TouchableOpacity>
			</View>

            <View style={styles.finishButtons}>
				<TouchableOpacity
					style={styles.confirmButton}
					onPress={() => {
                        if(action === 'modify'){
                            updateVet({ 
                                name,
                                animals,
                                photo,
                                address,
                                description,
                                contact,
                                openAt,
                                closeAt,
                                id
                            });
                        }else{
                            saveVet({ 
                                name,
                                animals,
                                photo,
                                address,
                                description,
                                contact,
                                openAt,
                                closeAt
                            });
                        }
						getMyVets();
						navigate('ComVeterinary');
					}}
				>
					<Text style={styles.text}>Agregar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.cancelButton} onPress={() => navigate('ComVeterinary')}>
					<Text style={styles.text}>Cancelar</Text>
				</TouchableOpacity>
			</View>
            
        </ScrollView>
	);
};

const styles = StyleSheet.create({
    general:{
        flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FFF7BB',
    },
    titles: {
		fontSize:32,
		fontWeight: 'bold',
		paddingTop: 20,
		paddingHorizontal: 20
	},
    inputImage:{
        backgroundColor: "#EEE096",
        height: 230,
        width: 370,
        borderRadius: 45,
		alignSelf: 'center',
		justifyContent: 'center',
        marginVertical: 10
	},
	image: {
		height:230,
		width: 370,
		alignSelf: 'center',
		borderRadius: 50,
		margin: 10
    },
	phStyle: {
        alignSelf: 'center'
    },
    inputContainer:{
        backgroundColor: "#BCDB89",
        minHeight: 50,
        width: 350,
        borderRadius: 20,
		alignSelf: 'center',
		alignContent: 'center',
		margin: 10
	},
	inputContainerText:{
        alignSelf: 'center',
        justifyContent: 'center',
		fontSize: 22,
		fontWeight:'600',
		flexWrap: 'wrap',
		minHeight: 50,
    },
    
    typeDog: {
		backgroundColor: '#9FCAE2',
		borderRadius: 30,
		height: 60,
		width: 60,
		margin: 15,
		marginBottom: '5%',
		alignItems: 'center'
	},
	typeCat: {
		backgroundColor: '#BCDB89',
		borderRadius: 30,
		height: 60,
		width: 60,
		margin: 15,
		marginBottom: '5%',
		alignItems: 'center'
	},
	typeFish: {
		backgroundColor: '#FFAFB6',
		borderRadius: 30,
		height: 60,
		width: 60,
		margin: 15,
		marginBottom: '5%',
		alignItems: 'center'
	},
	typeRabbit: {
		backgroundColor: '#E8916C',
		borderRadius: 30,
		height: 60,
		width: 60,
		margin: 15,
		marginBottom: '5%',
		alignItems: 'center'
    },
    selectType: {
		alignSelf: 'center',
		flexDirection: 'row',
    },
    
    finishButtons:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		marginHorizontal: 30,
		paddingBottom: 20
	},	
	confirmButton: {
		backgroundColor: '#98E568',
		height: 50,
		width: 150,
		borderRadius: 25,
		justifyContent:'center'
	},
	cancelButton: {
		backgroundColor: '#E8778B',
		height: 50,
		width: 150,
		borderRadius: 25,
		justifyContent:'center'
    },
    text: {
		fontSize: 15,
		fontWeight: 'bold',
		alignSelf: 'center',
		margin: '15%',
		padding: 9,
		alignSelf: 'center'
	},
})

export default (SaveModifyVetComponent);
