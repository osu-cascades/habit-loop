import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';

import { SignupButton } from './';
import { Login } from '../data/';

export class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: 'sik.email@sik.com',
        password: '123',
    }
  }

  // test user --> email: sik.email@sik.com password: 123
  loginUser = async () => {
    const loginData = {
      variables: {
        email: this.state.email,
        password: this.state.password,
        error: false,
      }
    }

    try {
      const result = await this.props.mutate(loginData);
      const token = _.get(result.data, 'login', '');

      await AsyncStorage.setItem('userToken', token);
      this.props.navigation.navigate('Main')
    } catch (err) {
      console.log('Error logging in:', JSON.stringify(err))
      this.setState({ error: true })
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <TextInput 
              placeholder="username or email" 
              placeholderTextColor='#666'
              onChangeText={email => this.setState({ email })}
              keyboardType='email-address'
              autoCapitalize='none'
              style={styles.input}
            />
            <TextInput 
              placeholder="password" 
              placeholderTextColor='#666'
              onChangeText={password => this.setState({ password })}
              textContentType="password"
              secureTextEntry
              style={styles.input}
            />
          <TouchableOpacity 
            onPress={this.loginUser}
            style={styles.buttonContainer}
          > 
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <SignupButton />
          {this.state.error && <Text>There was an error.</Text>}
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily: 'Avenir Next'
  },
  buttonContainer: {
    backgroundColor: '#999999',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    color: '#FFFFFF',
    fontWeight: '700',
  }
});

export default compose(
  withNavigation,
  Login
)(LoginForm);