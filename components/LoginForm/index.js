import React, { Component } from 'react';
import {
  AsyncStorage,
} from 'react-native';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';
import { Formik } from 'formik';
import * as yup from 'yup'

import { Login } from '../../data';
import Form from './Form';

export class LoginForm extends Component {
  // test user --> email: sik.email@sik.com password: 123
  loginUser = async () => {
    const loginData = {
      variables: {
        email: this.state.email,
        password: this.state.password,
      }
    }

    try {
      const result = await this.props.mutate(loginData);
      const token = _.get(result.data, 'login', '');

      await AsyncStorage.setItem('userToken', token);
      this.props.navigation.navigate('Main')
    } catch (err) {
      console.log('Error logging in:', JSON.stringify(err))
    }
  }

  render() {
    return (
      <Formik
          initialValues={{
              email: '',
              password: '',
          }}
          onSubmit={this.loginUser}
          render={props => <Form {...props}/>}
          validationSchema={
            yup.object().shape({
              email: yup
                  .string()
                  .email()
                  .required(),
              password: yup
                  .string()
                  .required(),
          })}
      />
    );
  }
}

export default compose(
  withNavigation,
  Login
)(LoginForm);