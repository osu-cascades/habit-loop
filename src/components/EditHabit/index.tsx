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

const EditHabit = ({ habit, refetch }) => {
  const [networkError, setNetworkError] = useState();
  const { goBack } = useNavigation();
  const [editHabit] = useMutation(UPDATE_HABIT);

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
          trainedFor: values.trainedFor,
          links: values.links,
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
        trainedFor: habit.trainedFor,
        links: habit.links,
      }}
      onSubmit={submitUpdatedHabit}
      render={props => <EditHabitForm {...props} />}
      validationSchema={yup.object().shape({
        name: yup.string().required(),
        type: yup.string().required(),
        trainedFor: yup.number().required(),
        links: yup.string().required(),
      })}
    />
  );
}

export default EditHabit;
