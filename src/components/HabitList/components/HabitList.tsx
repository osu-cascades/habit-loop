import React, { useState, useEffect, useRef, useCallback } from 'react';
import _ from 'lodash';
import HabitCard from './HabitCard';
import EmptyText from './EmptyText';
import { SectionList } from 'react-native';
import { Separator } from '../../basic';
import SwipeableRow from './SwipeableRow';
import Header from './ListHeader';
import { gql, useQuery } from '@apollo/client';
import { Loading } from '@src/components';

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

function useForceUpdate(): () => void {
  const [, dispatch] = useState<{}>(Object.create(null));

  // Turn dispatch(required_parameter) into dispatch().
  const memoizedDispatch = useCallback((): void => {
    dispatch(Object.create(null));
  }, [dispatch]);
  return memoizedDispatch;
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
  const forceUpdate = useForceUpdate();

  const { data, loading, refetch, networkStatus } = useQuery(GET_HABITS, {
    notifyOnNetworkStatusChange: true,
  });

  // componentDidMount
  useEffect(() => {
    // grab refetch from apollo query and use it when we want to edit habits
    updateHabits(refetch);
  }, []);

  useEffect(() => {
    if (habits.length === 0) {
      setSectionedLists([]);
    } else {
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
  }, [habits]);

  // componentDidUpdate
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
    }
  }, [data]);

  const handleDeletionError = useCallback(() => {
    setError(true);
  }, []);

  const handleDeletion = useCallback(
    habit_id => setHabits(habits => habits.filter(habit => habit_id !== habit.habit_id)),
    []
  );

  const handleCompletion = useCallback(habit_id => {
    setHabits(prevHabits =>
      prevHabits.map(habit => {
        if (habit_id === habit.habit_id) {
          return Object.assign(habit, { completed_today: true });
        }
        return habit;
      })
    );
  }, []);

  const renderProps = {
    handleDeletion,
    handleDeletionError,
    handleCompletion,
    data,
  };

  return (
    <SectionList
      data={sectionedLists}
      renderItem={({ item }) => (
        <SwipeableRow item={item} {...renderProps}>
          <HabitCard habit={item} refetch={refetch} />
        </SwipeableRow>
      )}
      sections={sectionedLists}
      keyExtractor={(item, index) => item.habit_id}
      ItemSeparatorComponent={() => <Separator />}
      renderSectionHeader={({ section: { title } }) => <Header text={title} />}
      ListEmptyComponent={<EmptyText />}
      onRefresh={() => refetch && refetch()}
      refreshing={networkStatus === 4}
    />
  );
};

export default HabitList;
