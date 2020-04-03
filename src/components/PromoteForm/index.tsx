import React from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import { Formik } from 'formik';
import * as yup from 'yup';

import Form from './Form';
import { useNavigation } from '@react-navigation/core';

const promoteUser = async ({ values, navigate }) => {
  const promoteData = {
    variables: {
      username: values.username,
    },
  };

  try {
    navigate('Settings');
  } catch (err) {
    console.error('Error promoting user:', JSON.stringify(err));
  }
};

const PromoteForm = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Formik
        initialValues={{
          username: 'Username',
        }}
        onSubmit={values => promoteUser({ values, navigate })}
        validationSchema={yup.object().shape({
          username: yup
            .string()
            .email()
            .required(),
        })}>
        {props => <Form {...props} />}
      </Formik>
    </View>
  );
};

export default PromoteForm;
