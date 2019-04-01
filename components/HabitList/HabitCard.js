import React from 'react';
import { Card, CardItem, Text } from "native-base";

const HabitCard = ({ habit, navigate, refetch }) => {
    return (
          <Card style={{ width: '100%' }}>
            <CardItem header button
              onPress={() => navigate('UserHabit', {
                habit,
                refetch
              })}
            >
              <Text>{habit.name}</Text>
            </CardItem>
            <CardItem button
              onPress={() => navigate('UserHabit', {
                habit,
                refetch
              })}
            >
            </CardItem>
          </Card>
    ) 
}

export default HabitCard;