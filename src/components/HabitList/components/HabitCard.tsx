import React from 'react';
import { Text } from 'react-native';

import * as GestureHandler from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const { RectButton } = GestureHandler;

const HabitCard = ({ habit, refetch }) => {
  const { navigate } = useNavigation();

  return (
    <RectButton
      style={{
        flex: 1,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
      onPress={() =>
        navigate('UserHabit', {
          habit,
          navigate: navigate,
          refetch,
        })
      }>
      <Text
        style={{
          alignSelf: `center`,
          fontSize: 20,
          fontFamily: `Avenir Next`,
          marginTop: 15,
        }}>
        {habit.name}
      </Text>
    </RectButton>
  );
};

export default HabitCard;
