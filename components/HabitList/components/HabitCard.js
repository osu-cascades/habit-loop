import React from 'react';
import { Text } from 'react-native';

import * as GestureHandler from 'react-native-gesture-handler';

const { 
  RectButton,
} = GestureHandler;

const HabitCard = ({ habit, navigate, refetch }) => {
    return (
      <RectButton 
          style={{
              flex: 1,
              height: 80,
              paddingVertical: 10,
              paddingHorizontal: 20,
              justifyContent: "space-between",
              flexDirection: "column",
              backgroundColor: "white",
          }}
          onPress={() => navigate('UserHabit', {
              habit: habit,
              navigate: navigate,
              refetch: refetch
          })}
      >
          <Text style={{
            alignSelf: `center`,
            fontSize: 20,
            fontFamily: `Avenir Next`,
            marginTop: 15,
          }}>{habit.name}</Text>
      </RectButton>
    ) 
}

export default HabitCard;