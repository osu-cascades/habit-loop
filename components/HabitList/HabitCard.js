import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableHighlight } from 'react-native';

const HabitHeader = styled.TouchableHighlight`
  flex: 1;
  height: 80;
  padding-vertical: 10;
  padding-horizontal: 20;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
`;

const HabitText = styled.Text`
  align-self: center;
  font-size: 20px;
  font-family: Avenir Next;
  margin-top: 15px;
`;

const HabitCard = ({ habit, navigate, refetch }) => {
    return (
      <TouchableHighlight 
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
      </TouchableHighlight>
    ) 
}

export default HabitCard;