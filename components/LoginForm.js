import React, { Component } from 'react';
import {
  AsyncStorage,
  Text
} from 'react-native';
import { Form, Item, Input, Button  } from 'native-base';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
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
  LoginUser = async () => {
    const loginData = {
      variables: {
        email: this.state.email,
        password: this.state.password,
        error: false,
      }
    }

    try {
      const result = await this.props.mutate(loginData);
      const token = result.data.login;

      await AsyncStorage.setItem('userToken', token);
      this.props.navigation.navigate('Main')
    } catch (err) {
      console.log('Error logging in:', JSON.stringify(err))
      this.setState({ error: true })
    }
  }

  render() {
    return (
        <Form>
          <Item>
            <Input 
              placeholder="sik.email@sik.com" 
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item last>
            <Input 
              placeholder="123" 
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button block primary
            onPress={this.LoginUser}
          > 
            <Text>Log in</Text>
          </Button>
          {this.state.error && <Text>There was an error.</Text>}
        </Form>
    );
  }
}

export default compose(
  withNavigation,
  Login
)(LoginForm);