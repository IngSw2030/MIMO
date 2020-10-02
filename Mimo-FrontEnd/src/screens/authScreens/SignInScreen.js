import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../../components/authForm';
import NavLink from '../../components/navLink';
import { Context } from '../../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  const mimoIcon = require('../../../assets/mimo.png');

  return (
    
    <View style={styles.screenContainer}>
    <Image style={styles.logoStyle} source={mimoIcon} />    
      <View style={styles.authContainer}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <AuthForm
          headerText="BIENVENID@"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="¡Hecho!"
          titulo="titulo"
        />
        <NavLink
          text="¿Aún no tiene una cuenta? "
          navText="¡Regístrese acá!"
          routeName="Signup"
        />
      </View>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
    logoStyle: {
        marginTop: 30,
        height: 250,
        width: 200,
        alignSelf: 'center',
    },
    screenContainer:{
    flex: 1,
    backgroundColor: '#FFF7DB'
    },  
    authContainer: {
    justifyContent: 'center',
    marginBottom: 250,
    marginTop: 1,
    }
});

export default SigninScreen;