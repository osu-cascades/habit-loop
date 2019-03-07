import React, { Component } from 'react';
import { 
  Text,
  AsyncStorage,
} from 'react-native';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Formik } from 'formik';
import * as yup from 'yup'

import { Signup } from '../../data';
import Form from './Form';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    }
  }
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
      console.log('Error signing up:', JSON.stringify(err));
      this.setState({ error: true })
    }
  }
  render() {
      return (
      <>
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
            }}
            onSubmit={this.signupUser}
            render={props => <Form {...props}/>}
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
        <Text>{this.state.error && 'Could not log in.'}</Text>
      </>
    );
  }
}

export default compose(
  Signup,
  withNavigation
)(SignupForm);
