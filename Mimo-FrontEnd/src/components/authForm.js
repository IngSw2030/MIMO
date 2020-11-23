import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, View } from 'react-native';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText, tipo }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var tipoUser;
    tipo ? 
        tipoUser = tipo
    : tipoUser = 0;

    return (
        <>
            <Text style={styles.headerTextStyle}> {headerText} {} </Text>

            {
                headerText === "¡REGÍSTRATE!" ?
                    <>
                        <View style={styles.roundedContainerStyle}>
                            <TextInput
                                placeholder='Tu nombre'
                                placeholderTextColor="#5c5c5c"
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.inputStyle}
                                value={name}
                                onChangeText={(newName) => setName(newName)}
                            />
                        </View>
                        <View style={styles.roundedContainerStyle}>
                            <TextInput
                                placeholder="tucorreo@ejemplo.com"
                                placeholderTextColor="#5c5c5c"
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={styles.inputStyle}
                                value={email}
                                onChangeText={(newEmail) => setEmail(newEmail)}
                            />
                        </View>
                    </> :
                    <View style={styles.roundedContainerStyle}>
                        <TextInput
                            placeholder="tucorreo@ejemplo.com"
                            placeholderTextColor="#5c5c5c"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputStyle}
                            value={email}
                            onChangeText={(newEmail) => {
                                setEmail(newEmail)
                            }}
                        />
                    </View>

            }
            <View style={styles.roundedContainerStyle}>
                <TextInput
                    placeholder='••••••••••••'
                    placeholderTextColor="#5c5c5c"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    style={styles.inputStyle}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.submitTextContainer}
                    onPress={() => onSubmit({ email, name, password, tipoUser })}
                >
                    <Text style={styles.buttonText}>{submitButtonText}</Text>
                </TouchableOpacity>
            </View>
        </>
    );

};

const styles = StyleSheet.create({
    headerTextStyle: {
        fontSize: 30,
        fontWeight: '300',
        color: '#000',
        alignSelf: "center",
        marginBottom: '10%'
    },

    roundedContainerStyle: {
        marginTop: 30,
        backgroundColor: "#B0EFEF",
        height: 50,
        width: 300,
        borderRadius: 75,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    inputStyle: {
        color: "#000",
        fontSize: 18,
        alignSelf: "center",
        textAlign: "center"
    },

    errorMessage: {
        fontSize: 16,
        color: '#BF3D3D',
        marginLeft: 15,
        marginVertical: 15,
        alignSelf: "center",
    },

    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 25,
    },

    submitTextContainer: {
        alignSelf: "center",
        height: 40,
        width: 130,
        backgroundColor: "#88CCF2",
        borderRadius: 18,
        justifyContent: "center",
    },

    buttonText: {
        fontSize: 20,
        color: "#000",
        alignSelf: "center",
    }

});

export default AuthForm;