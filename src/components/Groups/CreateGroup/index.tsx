import React, { useState } from 'react';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import * as yup from 'yup';
import { CreateGroupForm } from './CreateGroupForm';
import { useMutation, gql } from '@apollo/client';
import { useNavigation } from '@react-navigation/core';

const CREATE_GROUP = gql`
  mutation createGroup($group_name: String!) {
    createGroup(group_name: $group_name)
  }
`;

const CreateGroupContainer = ({ route }) => {
  const [pressed, setPressed] = useState();
  const [networkError, setNetworkError] = useState();
  const { goBack } = useNavigation();
  const [createGroup, { data, loading, error }] = useMutation(CREATE_GROUP);
  const { refetch } = route.params;

  const submitNewGroup = async values => {
    const newGroup = {
      variables: {
        group_name: values.group_name,
      },
    };

    // Prevent duplicate habits
    if (!pressed) {
      setPressed(true);
      // Wait for server to return result before refetching and going back
      try {
        await createGroup(newGroup);

        refetch();
        goBack();
      } catch (err) {
        // we can handle the state of an error here if submit fails
        console.error(err);
      } finally {
        setPressed(false);
      }
    }
  };

  return (
    <Formik
      style={styles.newGroup}
      initialValues={{
        group_name: '',
      }}
      onSubmit={submitNewGroup}
      validationSchema={yup.object().shape({
        group_name: yup.string().required(),
      })}>
      {props => <CreateGroupForm {...props} pressed={pressed} />}
    </Formik>
  );
};

const styles = StyleSheet.create({
  newGroup: {
    backgroundColor: '#ffffff',
  },
});

export default CreateGroupContainer;
