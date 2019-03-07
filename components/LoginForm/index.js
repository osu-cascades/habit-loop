import React, { Component } from 'react';
import {
  Text,
  View,
  AsyncStorage,
} from 'react-native';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';

import { SignupButton } from '../';
import { Login } from '../../data';
import { Button, ButtonText, Input } from '../basic';

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
        <View>
            <Input 
              placeholder="username or email" 
              placeholderTextColor='#666'
              onChangeText={email => this.setState({ email })}
              keyboardType='email-address'
              returnKeyType="next"
              autoCapitalize='none'
              autoCorrect={false}
              onSubmitEditing={() => this.passwordInput.focus()}
            />
            <Input 
              placeholder="password" 
              placeholderTextColor='#666'
              onChangeText={password => this.setState({ password })}
              textContentType="password"
              returnKeyType="go"
              secureTextEntry
              ref={input => this.passwordInput = input}
            />
          <Button 
            onPress={this.loginUser}
          > 
            <ButtonText>LOGIN</ButtonText>
          </Button>
          <SignupButton />
          {this.state.error && <Text>There was an error.</Text>}
        </View>
    );
  }
}

export default compose(
  withNavigation,
  Login
)(LoginForm);