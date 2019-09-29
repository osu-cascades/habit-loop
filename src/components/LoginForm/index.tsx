import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Login } from '../../data';
import Form from './Form';

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }
  // test user --> email: sik.email@sik.com password: 12345678
  loginUser = async values => {
    const loginData = {
      variables: {
        email: values.email,
        password: values.password,
      },
    };

    try {
      const result = await this.props.mutate(loginData);
      const token = _.get(result.data, 'login', '');

      await AsyncStorage.setItem('userToken', token);
      this.props.navigation.navigate('Main');
    } catch (err) {
      console.error('Error logging in:', JSON.stringify(err));
    }
  };

  render() {
    return (
      <View>
        <Formik
          initialValues={{
            email: 'email@email.com',
            password: '12345678',
          }}
          onSubmit={this.loginUser}
          render={props => <Form {...props} />}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email()
              .required(),
            password: yup.string().required(),
          })}
        />
        <Text>{this.state.error && 'Could not log in.'}</Text>
      </View>
    );
  }
}

export default compose(
  withNavigation,
  Login
)(LoginForm);
