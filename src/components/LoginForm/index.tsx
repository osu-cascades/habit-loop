import React, { useState } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import _ from 'lodash';
import { Formik } from 'formik';
import * as yup from 'yup';
import Form from './Form';
import { useNavigation } from '@react-navigation/core';

import { useMutation, gql } from '@apollo/client';

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const loginUser = async ({ values, login, navigate }) => {
  console.log(values, 'pls');
  const loginData = {
    variables: {
      email: values.email,
      password: values.password,
    },
  };

  try {
    const result = await login(loginData);
    const token = _.get(result.data, 'login', '');

    await AsyncStorage.setItem('userToken', token);
    navigate('Main');
  } catch (err) {
    console.error('Error logging in:', JSON.stringify(err));
  }
};

const LoginForm = () => {
  const { navigate } = useNavigation();
  const [login, { data, loading, error }] = useMutation(LOGIN);

  return (
    <View>
      <Formik
        initialValues={{
          email: 'email@email.com',
          password: '12345678',
        }}
        onSubmit={values => loginUser({ values, login, navigate })}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email()
            .required(),
          password: yup.string().required(),
        })}>
        {props => <Form {...props} />}
      </Formik>
      <Text>{error && 'Could not log in.'}</Text>
    </View>
  );
};

export default LoginForm;
