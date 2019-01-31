import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Text, Form, Item, Input, Button  } from 'native-base';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Signup } from '../data';
import { Formik } from 'formik';
import * as yup from 'yup'

const SignupComponent = props => {
  return (
    <Form>
        <Item>
          <Input
            placeholder="username" 
            value={props.values.username}
            onChangeText={props.handleChange('username')}
          />
        </Item>
        <Item>
          <Input
            placeholder="email" 
            value={props.values.email}
            onChangeText={props.handleChange('email')}
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </Item>
        <Item last>
          <Input
            placeholder="password"
            value={props.values.password}
            onChangeText={props.handleChange('password')}
            textContentType="password"
            secureTextEntry
          />
          {props.touched.password && props.errors.password && <Text>{props.errors.password}</Text>}
        </Item>
          <Button 
            block
            onPress={props.handleSubmit}
          >
            <Text>Sign Up!</Text>
          </Button>
    </Form>
  );
}


class SignupForm extends Component {
  signupUser = async values => {
    const signupData = {
      variables: {
        input: {
          email: values.email,
          password: values.password,
          username: values.username,
        }
      }
    }

    try {
      const result = await this.props.mutate(signupData);
      const token = result.data.signup;

      await AsyncStorage.setItem('userToken', token)
      this.props.navigation.navigate('Main')

    } catch (err) {
      console.log('Error signing up:', JSON.stringify(err))
      this.setState({ error: true })
    }
  }
  render() {
      return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
            }}
            onSubmit={this.signupUser}
            render={props => <SignupComponent {...props}/>}
            validationSchema={
              yup.object().shape({
                username: yup
                    .string()
                    .required(),
                password: yup
                    .string()
                    .min(8, "Password must have 8 characters")
                    .required(),
                email: yup
                    .string()
                    .email()
                    .required()
            })}
        />
    );
  }
}

export default compose(
  Signup,
  withNavigation
)(SignupForm);
