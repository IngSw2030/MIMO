import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, View } from 'react-native';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Text style={styles.headerTextStyle}> {headerText} {} </Text>

            {
                headerText === "¡REGÍSTRATE!" ?
                    <>
                        <View style={styles.roundedContainerStyle}>
                            <TextInput
                                placeholder="Tu nombre"
                                placeholderTextColor="#000"
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
                                placeholderTextColor="#000"
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
                            placeholderTextColor="#000"
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
                    placeholder="••••••••••••"
                    placeholderTextColor="#000"
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
                    onPress={() => onSubmit({ email, name, password })}
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
        alignSelf: "center"
    },

    roundedContainerStyle: {
        marginTop: 30,
        marginLeft: 30,
        backgroundColor: "#B0EFEF",
        height: 42,
        width: 320,
        borderRadius: 75,
        justifyContent: 'center'
    },

    inputStyle: {
        color: "#000",
        fontSize: 18,
        marginLeft: 15
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
        marginHorizontal: 130,
        height: 32,
        width: 114,
        backgroundColor: "#88CCF2",
        borderRadius: 18,
        justifyContent: "center",
    },

    buttonText: {
        fontSize: 18,
        color: "#000",
        alignSelf: "center",
    }

});

export default AuthForm;