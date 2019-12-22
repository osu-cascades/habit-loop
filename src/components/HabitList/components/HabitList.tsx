import React, { useState, useEffect, useRef, useCallback } from 'react';
import _ from 'lodash';
import HabitCard from './HabitCard';
import EmptyText from './EmptyText';
import { SectionList, Text } from 'react-native';
import { Separator } from '../../basic';
import SwipeableRow from './SwipeableRow';
import Header from './ListHeader';
import { gql, useQuery } from '@apollo/client';

// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

const GET_HABITS = gql`
  query getHabits {
    getHabits {
      item_id
      habit_name
      type
      created_at
      user_id
      completed_today
      recurrence
    }
  }
`;

const HabitList = ({ updateHabits, ...props }) => {
  const [habits, setHabits] = useState([]);
  const [sectionedLists, setSectionedLists] = useState([]);
  const [error, setError] = useState({});
  const prevHabits = usePrevious(habits);

  const { data, loading, error: getHabitsError } = useQuery(GET_HABITS);

  // componentDidMount
  useEffect(() => {
    if (data?.getHabits) {
      const mappedHabits = data.getHabits.map(item => ({
        name: item.habit_name,
        created_at: item.created_at,
        habit_id: item.item_id,
        key: item.item_id,
        type: item.type,
        completed_today: item.completed_today || false,
        recurrence: item.recurrence,
        user_id: item.user_id,
      }));

      setHabits(mappedHabits);

      if (!_.isEmpty(habits)) {
        const lists = [
          {
            title: 'Daily Habits',
            data: habits.filter(habit => habit.completed_today === false && habit.recurrence === 'DAILY'),
          },
          {
            title: 'Weekly Habits',
            data: habits.filter(habit => habit.completed_today === false && habit.recurrence === 'WEEKLY'),
          },
          { title: 'Completed Habits', data: habits.filter(habit => habit.completed_today === true) },
        ];

        setSectionedLists(lists);
      }
    }

    // grab refetch from apollo query and use it when we want to edit habits
    updateHabits(props.data.refetch);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (habits !== prevHabits && !_.isEmpty(habits)) {
      const lists = [
        {
          title: 'Daily Habits',
          data: habits.filter(habit => habit.completed_today === false && habit.recurrence === 'DAILY'),
        },
        {
          title: 'Weekly Habits',
          data: habits.filter(habit => habit.completed_today === false && habit.recurrence === 'WEEKLY'),
        },
        { title: 'Completed Habits', data: habits.filter(habit => habit.completed_today === true) },
      ];

      setSectionedLists(lists);
    } else if (habits !== prevHabits && _.isEmpty(habits)) {
      setSectionedLists([]);
    }
  }, [habits]);

  const handleDeletionError = useCallback(() => {
    setError(true);
  }, []);

  const handleDeletion = useCallback(habit_id => {
    setHabits(habits.filter(habit => habit_id !== habit.habit_id));
  }, []);

  const handleCompletion = useCallback(habit_id => {
    const completeHabit = habits.map(habit => {
      if (habit_id === habit.habit_id) {
        return Object.assign(habit, { completed_today: true });
      }
      return habit;
    });
    setHabits(completeHabit);
  }, []);

  const renderProps = {
    error,
    handleDeletion,
    handleDeletionError,
    handleCompletion,
    navigate: props.navigate,
    refetch: props.refetch,
    data: props.data,
  };

  return (
    <SectionList
      data={sectionedLists}
      renderItem={({ item }) => (
        <SwipeableRow item={item} {...renderProps}>
          <HabitCard habit={item} navigate={props.navigate} refetch={props.refetch} />
        </SwipeableRow>
      )}
      sections={sectionedLists}
      keyExtractor={(item, index) => item.habit_id}
      ItemSeparatorComponent={() => <Separator />}
      renderSectionHeader={({ section: { title } }) => <Header text={title} />}
      ListEmptyComponent={<EmptyText />}
      onRefresh={props.data.refetch}
      refreshing={props.data.networkStatus === 4}
    />
  );
};

export default HabitList;
