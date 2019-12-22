import React, { useState } from 'react';
import { Formik } from 'formik';
import _ from 'lodash';
import * as yup from 'yup';

import EditHabitForm from './EditHabitForm';
import { gql, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/core';

const UPDATE_HABIT = gql`
  mutation updateHabit($input: UpdateHabitInput!) {
    updateHabit(input: $input) {
      habit_name
    }
  }
`;

const EditHabit = ({ habit, route }) => {
  const [networkError, setNetworkError] = useState();
  const { goBack } = useNavigation();
  const [editHabit, { data, loading, error }] = useMutation(UPDATE_HABIT);
  const { refetch } = route.params;

  async function submitUpdatedHabit(values) {
    const updatedHabit = {
      variables: {
        input: {
          habit_name: values.name,
          type: values.type,
          created_at: habit.created_at,
          item_id: habit.habit_id,
          user_id: habit.user_id,
          recurrence: values.recurrence,
        },
      },
    };

    try {
      await editHabit(updatedHabit);

      refetch();
      goBack();
    } catch (err) {
      console.error(err);
      setNetworkError(true);
    }
  }

  return (
    <Formik
      initialValues={{
        name: habit.name,
        type: habit.type,
        recurrence: habit.recurrence,
      }}
      onSubmit={submitUpdatedHabit}
      validationSchema={yup.object().shape({
        name: yup.string().required(),
        type: yup.string().required(),
      })}>
      {props => <EditHabitForm {...props} />}
    </Formik>
  );
};

export default EditHabit;
