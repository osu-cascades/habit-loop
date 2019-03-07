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
import {
  Logo
} from '../components/basic';
export default class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View>
          <Logo
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
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#E9E9E9',
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain'
  }
});
