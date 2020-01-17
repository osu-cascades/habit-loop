import React, { useState } from 'react';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import * as yup from 'yup';
import { HabitForm } from './HabitForm';
import { useMutation, gql } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';

const CREATE_HABIT = gql`
  mutation createHabit($input: HabitInput) {
    createHabit(input: $input) {
      habit_name
    }
  }
`;

const CreateHabitForm = ({ refetch }) => {
  const [pressed, setPressed] = useState(false);
  const [createHabit, { data, loading, error }] = useMutation(CREATE_HABIT);
  const { goBack } = useNavigation();

  const submitNewHabit = async values => {
    const newHabit = {
      variables: {
        input: {
          habit_name: values.name,
          type: values.type,
          trainedFor: values.trainedFor,
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
  );
}

const styles = StyleSheet.create({
  addHabitForm: {
    backgroundColor: '#ffffff',
  },
});

export default CreateHabitForm;
