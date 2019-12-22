import React, { useState } from 'react';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import * as yup from 'yup';

import { JoinGroupForm } from './JoinGroupForm';
import { gql, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/core';

const JOIN_GROUP = gql`
  mutation joinGroup($item_id: String!, $group_name: String!) {
    joinGroup(item_id: $item_id, group_name: $group_name)
  }
`;

const JoinGroupContainer = ({ route }) => {
  const [pressed, setPressed] = useState(false);
  const [joinGroup, { data, loading, error }] = useMutation(JOIN_GROUP);
  const { goBack } = useNavigation();
  const { refetch } = route.params;

  const submitJoinGroup = async values => {
    const group = {
      variables: {
        item_id: values.group_id,
        group_name: values.group_name,
      },
    };

    // Prevent duplicate habits
    if (!pressed) {
      setPressed(true);
      // Wait for server to return result before refetching and going back
      try {
        await joinGroup(group);

        refetch();
        goBack();
      } catch (err) {
        // we can handle the state of an error here if submit fails
        console.log(err);
      } finally {
        setPressed(false);
      }
    }
  };
  return (
    <Formik
      style={styles.addJoinGroupForm}
      initialValues={{
        group_id: '',
        group_name: '',
      }}
      onSubmit={submitJoinGroup}
      validationSchema={yup.object().shape({
        group_id: yup.string().required(),
        group_name: yup.string().required(),
      })}>
      {props => <JoinGroupForm {...props} pressed={pressed} />}
    </Formik>
  );
};

const styles = StyleSheet.create({
  addJoinGroupForm: {
    backgroundColor: '#ffffff',
  },
});

export default JoinGroupContainer;
