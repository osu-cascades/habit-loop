import React, { useCallback } from 'react';
import _ from 'lodash';
import { Alert } from 'react-native';
import { FolderIcon } from '@src/assets/svgs';
import { RightActionButton, RightActionText } from '../habit_list_styles';
import { useMutation, gql } from '@apollo/client';


const DELETE_HABIT = gql`
  mutation deleteHabit($item_id: String!) {
    deleteHabit(item_id: $item_id) {
      habit_name
    }
  }
`;

const DeleteButton = ({ habit, handleDeletion, scale, handleDeletionError }) => {
  const [deleteHabit, { data, loading, error: deleteHabitError }] = useMutation(DELETE_HABIT);

  const handlePress = useCallback(() => {
    const habit_id = _.get(habit, 'habit_id', '');

    const deletedHabit = {
      variables: {
        item_id: habit_id,
      },
    };

    const deleteHabitCallback = async () => {
      try {
        await deleteHabit(deletedHabit);

        handleDeletion(habit_id);
        Alert.alert(`Successfully deleted the habit: ${habit.name}`);
      } catch (err) {
        console.tron.error('Delete Habit Error: ', err);
        handleDeletionError();
      }
    };

    deleteHabitCallback();
  }, []);

  return (
    <RightActionButton onPress={handlePress}>
      <RightActionText> delete habit </RightActionText>
      <FolderIcon
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
      {deleteHabitError && Alert.alert('Error deleting habit.')}
    </RightActionButton>
  );
};

export default DeleteButton;
