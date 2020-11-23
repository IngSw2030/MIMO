import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../../components/authForm';
import NavLink from '../../components/navLink';
import { Context } from '../../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(Context);
  const mimoIcon = require('../../../assets/mimo.png');
  const tipo = navigation.getParam('ent');

  return (
    <View style={styles.screenContainer}>
      <Image style={styles.logoStyle} source={mimoIcon} />
      <View style={styles.authContainer}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <AuthForm
          headerText="¡REGÍSTRATE!"
          errorMessage={state.errorMessage}
          submitButtonText="¡Hecho!"
          onSubmit={signup}
          tipo = {tipo}
        />
        <NavLink
          routeName="Signin"
          text="¿Ya tiene una cuenta? "
          navText="¡Ingrese acá!"
        />
      </View>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  logoStyle: {
    marginTop: '20%',
    height: 180,
    width: 180,
    alignSelf: 'center',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFF7BB'
  },
  authContainer: {
    justifyContent: 'center',
    marginBottom: 250,
    marginTop: 1,
  }
});

export default SignupScreen;