import React from 'react';
import {
  View, 
  Image,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

import {
  LoginForm,
} from '../components';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/images/lt.png')}
          />
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#E9E9E9',
  },
  logoContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain'
  }
});
