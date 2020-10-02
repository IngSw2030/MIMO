import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, navText, routeName }) => {
  return (
    <View style={styles.screenStyle}>
      <Text style={styles.textStyle}>{text}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.navTextStyle}>{navText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center'
  },
  textStyle: {
    color: '#000'
  },
  navTextStyle: {
    color: '#E8778B',
    fontWeight: 'bold'
  }
});

export default withNavigation(NavLink);