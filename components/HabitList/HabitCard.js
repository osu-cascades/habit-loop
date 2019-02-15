import React from 'react';
import { Card, CardItem, Text } from "native-base";

const HabitCard = ({ habit, navigate }) => {
    return (
          <Card style={{ width: '100%' }}>
            <CardItem header button
              onPress={() => navigate('UserHabit', {
                habit,
              })}
            >
              <Text>{habit.name}</Text>
            </CardItem>
            <CardItem button
              onPress={() => navigate('UserHabit', {
                habit,
              })}
            >
            </CardItem>
          </Card>
    ) 
}

export default HabitCard;