import React, { Component, Fragment } from "react";
import { Svg } from 'expo';
import {  Content, Card, CardItem, Text } from "native-base";
import _ from 'lodash';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import { compose } from 'react-apollo';
import { GetAllHabits } from '../data';
import { withNavigation } from 'react-navigation';
import CreateHabitFAB from '../components/CreateHabitFAB';

// Skeleton loading
const Loading = () => (
  <SvgAnimatedLinearGradient height={300}>
    <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
    <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
    <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
  </SvgAnimatedLinearGradient>
)


const HabitCard = ({habit, navigate}) => {
  return (
        <Card >
          <CardItem header button
            onPress={() => navigate('UserHabit', {
              habit,
            })}
          >
            <Text>{habit.title}</Text>
          </CardItem>
          <CardItem button
            onPress={() => navigate('UserHabit', {
              habit,
            })}
          >
              <Text>
                {habit.content}
              </Text>
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
    return { 
      title: item.name,
      content: 'WIAUGIUAW',
      types: item.types,
    }
   });

   return (
      <Fragment>
        <Content padder>
          {_.map(habits, (habit, idx) => 
            <HabitCard 
              habit={habit} 
              navigate={props.navigation.navigate} 
              key={idx}/>)}
        </Content>
          <CreateHabitFAB refetch={() => props.data.refetch()}/>
      </Fragment>
  );
}

export default compose(
  withNavigation,
  GetAllHabits,
)(HabitCards);