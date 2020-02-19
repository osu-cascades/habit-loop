import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import * as yup from 'yup';
import { HabitForm } from './HabitForm';
import { AdminHabitForm } from './AdminHabitForm';
import { useMutation, useQuery, gql } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { Tab, Tabs } from 'native-base';

const CREATE_HABIT = gql`
  mutation createHabit($input: HabitInput) {
    createHabit(input: $input) {
      habit_name
    }
  }
`;

const ME = gql`
  query ME {
    me {
      role
    }
  }
`;

const CreateHabitForm = ({ refetch }) => {
  const [pressed, setPressed] = useState(false);
  const [createHabit, { data, loading, error }] = useMutation(CREATE_HABIT);
  const { goBack } = useNavigation();

  const getRole = () => {
    const { data: userData, loading, refetch } = useQuery(ME);
    refetch();
    if (!loading) {
      return userData.me.role[0];
    }
  };

  const submitNewHabit = async values => {
    const newHabit = {
      variables: {
        input: {
          habit_name: values.name,
          type: values.type,
          trainedFor: values.trainedFor * 60,
          recurrence: values.recurrence,
          links: values.links,
        },
      },
    };

    // Prevent duplicate habits
    if (!pressed) {
      setPressed(true);
      // Wait for server to return result before refetching and going back
      try {
        await createHabit(newHabit);
        // refetch then go back if the mutation was successful
        // for future reference we don't even need to refetch
        // it could just update in the app itself without making any requests
        // since we know it is successful at this point.
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
    <Tabs>
      <Tab heading="Create Habit">
        <Formik
          style={styles.addHabitForm}
          initialValues={{
            name: '',
            type: '',
            trainedFor: '',
            recurrence: '',
            links: '',
          }}
          onSubmit={submitNewHabit}
          validationSchema={yup.object().shape({
            name: yup.string().required(),
            type: yup.string().required(),
            trainedFor: yup.number().required(),
            recurrence: yup.string().required(),
            links: yup.string().required(),
          })}>
          {props => <HabitForm {...props} pressed={pressed} />}
        </Formik>
      </Tab>
      {getRole() === 'ADMIN' ? (
        <Tab heading="Create Group Habit">
          <Formik
            style={styles.addHabitForm}
            initialValues={{
              name: '',
              type: '',
              trainedFor: '',
              recurrence: '',
              links: '',
            }}
            onSubmit={submitNewHabit}
            validationSchema={yup.object().shape({
              name: yup.string().required(),
              type: yup.string().required(),
              trainedFor: yup.number().required(),
              recurrence: yup.string().required(),
              links: yup.string().required(),
            })}>
            {props => <AdminHabitForm {...props} pressed={pressed} />}
          </Formik>
        </Tab>
      ) : null}
    </Tabs>
  );
};

const styles = StyleSheet.create({
  addHabitForm: {
    backgroundColor: '#ffffff',
  },
});

export default CreateHabitForm;
