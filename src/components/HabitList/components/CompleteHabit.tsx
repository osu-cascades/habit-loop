import React, { useCallback } from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LeftAction, LeftActionText } from '../habit_list_styles';
import _ from 'lodash';
import { useMutation, gql } from '@apollo/client';

const COMPLETE_HABIT = gql`
  mutation completeHabit($item_id: String!, $recurrence: String!) {
    completeHabit(item_id: $item_id, recurrence: $recurrence)
  }
`;

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

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
      <AnimatedIcon
        name="archive"
        size={30}
        color="#fff"
        style={{
          transform: [{ scale }],
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
