import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/core';

import { useMutation, gql } from '@apollo/client';

import Form from './Form';

const signupUser = async ({ values, navigate, signup }) => {
  const signupData = {
    variables: {
      input: {
        email: values.email,
        password: values.password,
        username: values.username,
      },
    },
  };

  try {
    const result = await signup(signupData);
    const token = result.data.signup;

    await AsyncStorage.setItem('userToken', token);
    navigate('Main');
  } catch (err) {
    console.error('Error signing up:', JSON.stringify(err));
  }
};

const SIGNUP = gql`
  mutation signup($input: SignupInput!) {
    signup(input: $input)
  }
`;

const SignupForm = () => {
  const { navigate } = useNavigation();
  const [signup, { data, loading, error }] = useMutation(SIGNUP);

  return (
    <>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={({ values }) => signupUser({ values, signup, navigate })}
        validationSchema={yup.object().shape({
          username: yup.string().required(),
          password: yup
            .string()
            .min(8, 'Password must have 8 characters')
            .required(),
          email: yup
            .string()
            .email()
            .required(),
        })}>
        {props => <Form {...props} />}
      </Formik>
      <Text>{error && 'Could not sign up.'}</Text>
    </>
  );
};

export default SignupForm;
