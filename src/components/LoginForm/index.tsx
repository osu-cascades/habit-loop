import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CbtLogin } from '../../data';
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
      console.log('Error logging in:', JSON.stringify(err));
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <View>
        <Formik
          onSubmit={this.loginUser}
          render={props => <Form {...props} loginError={this.state.error} />}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email()
              .required(),
            password: yup.string().required(),
          })}
        />
      </View>
    );
  }
}

export default compose(
  withNavigation,
  CbtLogin
)(LoginForm);
