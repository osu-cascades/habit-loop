import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  height: 80;
  padding-vertical: 10;
  padding-horizontal: 20;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
`;

const HabitHeader = styled.TouchableOpacity`

`;

const HabitText = styled.Text`
  align-self: center;
  font-size: 20px;
  font-family: Avenir Next;
  margin-top: 15px;
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