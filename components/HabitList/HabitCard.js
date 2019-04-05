import React from 'react';
import { Card, CardItem, Text } from "native-base";
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
`;

const HabitHeader = styled.TouchableOpacity`

`;

const HabitText = styled.Text`
  align-self: center;
  font-size: 20px;
  font-family: Avenir Next;
  
`;

const HabitCard = ({ habit, navigate, refetch }) => {
    return (
          <Container>
            <HabitHeader
              onPress={() => navigate('UserHabit', {
                habit,
                refetch
              })}
            >
              <HabitText>{habit.name}</HabitText>
            </HabitHeader>
          </Container>
    ) 
}

export default HabitCard;