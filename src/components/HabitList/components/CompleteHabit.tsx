import React from 'react';
import { PlusIcon } from '@src/assets/svgs';
import { LeftAction, LeftActionText } from '../habit_list_styles';
import _ from 'lodash';
import { useMutation, gql } from '@apollo/client';

const COMPLETE_HABIT = gql`
  mutation completeHabit($item_id: String!, $recurrence: String!) {
    completeHabit(item_id: $item_id, recurrence: $recurrence)
  }
`;

const CompleteHabitButton = ({ habit, handleCompletion, scale }) => {
  const [completeHabit, { data, loading, error }] = useMutation(COMPLETE_HABIT);

  const submitCompletion = async () => {
    const completedHabit = {
      variables: {
        item_id: _.get(habit, 'habit_id', ''),
        recurrence: _.get(habit, 'recurrence', ''),
      },
    };

    try {
      await completeHabit(completedHabit);
      handleCompletion(habit.habit_id);
    } catch (err) {
      console.tron.log('Complete Habit Error: ', err, error);
    }
  };

  // const handleCompletionCallback = useCallback(() => , []);

  return (
    <LeftAction onPress={submitCompletion}>
      <PlusIcon
        name="archive"
        width={30}
        color="#fff"
        style={{
          width: 30,
          marginHorizontal: 10,
          alignSelf: 'center',
          marginLeft: 20,
        }}
      />
      <LeftActionText>complete habit</LeftActionText>
    </LeftAction>
  );
};

export default CompleteHabitButton;
