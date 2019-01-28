import React, { Component } from 'react';
import { AsyncStorage, Text, Form, Item, Input, Button  } from 'native-base';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: null,
        password: null,
        error: false
    }
  }
  SignUpUser = async () => {
    const loginData = {
      variables: {
        email: this.state.email,
        password: this.state.password,
        error: this.state.error
      }
    }

    try {
      this.props.navigation.navigate('Main')
    } catch (err) {
      console.log('Error logging in:', JSON.stringify(err))
      this.setState({ error: true })
    }
  }
  render() {
    return (
      <Text>Sign Up</Text>
      <Form>
      <Item>
      <Input
        placeholder="email" 
        onChangeText={email => this.setState({ email })}
      />
      </Item>
      <Item last>
      <Input
        placeholder="password"
        onChangeText={password => this.setState({ password })}
      />
      </Item>
          <Button 
            onPress={this.SignUpUser}
          >
          <Text>Sign Up</Text>
          </Button>
      </Form>
    );
  }
}

export default compose(withNavigation)(SignUpForm);
