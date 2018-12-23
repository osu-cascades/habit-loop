import React, { Component, Fragment } from "react";
import {
  ScrollView,
  RefreshControl
} from 'react-native';
import { Svg } from 'expo';
import { Container, Header, Content, Card, CardItem, Text, Body, Accordion } from "native-base";
import _ from 'lodash';
import CreateHabitButton from '../components/CreateHabitButton';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import { GetAllHabits } from '../data';

// Skeleton loading
const Loading = () => (
  <SvgAnimatedLinearGradient height={300}>
    <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
    <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
    <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
  </SvgAnimatedLinearGradient>
)


const HabitCard = ({habit, refetch}) => {
  return (
        <Card>
          <CardItem header bordered>
            <Text>{habit.title}</Text>
          </CardItem>
          <CardItem bordered>
              <Text>
                {habit.content}
              </Text>
          </CardItem>
          <CardItem footer bordered button
            onPress={() => alert(`this habit is called ${habit.title}`)}
          >
            <Text>View Habit</Text>
          </CardItem>
        </Card>
  ) 
}

const HabitCards = props => {
  if (props.data.loading){
    return <Loading/>
  } else if (props.data.error) {
      return <Text>Error Loading Data!!</Text>
  }
  

  const habits = props.data.getAllHabits.map(item => {
    console.log(item)
    return { 
      title: item.name,
      content: 'WIAUGIUAW',
      types: item.types,
    }
   })

   return (
      <Content padder>
        {_.map(habits, (habit, idx) => <HabitCard habit={habit} refetch={props.data.refetch} key={idx}/>)}
        <CreateHabitButton refetch={() => props.data.refetch()}/>
      </Content>
  );
}

export default GetAllHabits(HabitCards);
