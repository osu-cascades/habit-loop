import React, { useState, useEffect, useRef } from 'react';
import { Formik, yupToFormErrors } from 'formik';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import * as yup from 'yup';
import { HabitForm } from './HabitForm';
import { AdminCreateHabitForm } from './AdminCreateHabitForm';
import { useMutation, useQuery, useLazyQuery, gql } from '@apollo/client';
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

const CREATE_GROUP_HABIT = gql`
  mutation CREATE_GROUP_HABIT($group_id: String, $input: HabitInput) {
    createGroupHabit(group_id: $group_id, input: $input) {
      habit_name
    }
  }
`;

const CreateHabitForm = ({ refetch }) => {
  const [pressed, setPressed] = useState(false);
  const [createHabit, { data, loading, error }] = useMutation(CREATE_HABIT);
  const [
    createGroupHabit,
    { data: createGroupData, loading: createGroupLoading, error: createGroupError },
  ] = useMutation(CREATE_GROUP_HABIT);
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

  const submitNewGroupHabit = async values => {
    const params = {
      variables: {
        group_id: values.group,
        input: {
          habit_name: values.name,
          type: values.type,
          trainedFor: values.trainedFor * 60,
          recurrence: values.recurrence,
          links: values.links,
        },
      },
    };

    if (!pressed) {
      setPressed(true);
      try {
        await createGroupHabit(params);
        refetch();
        goBack();
      } catch (err) {
        console.log(err);
      } finally {
        setPressed(false);
      }
    }
  };

  return (
    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#E6B43C' }}>
      <Tab heading="Add Habit" tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000' }}>
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
        <Tab heading="Add Group Habit" tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000' }}>
          <Formik
            style={styles.addHabitForm}
            initialValues={{
              name: '',
              type: '',
              trainedFor: '',
              group: '',
              recurrence: '',
              links: '',
            }}
            onSubmit={submitNewGroupHabit}
            validationSchema={yup.object().shape({
              name: yup.string().required(),
              type: yup.string().required(),
              trainedFor: yup.number().required(),
              group: yup.string().required(),
              recurrence: yup.string().required(),
              links: yup.string().required(),
            })}>
            {props => <AdminCreateHabitForm {...props} pressed={pressed} />}
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
