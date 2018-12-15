import React, { Component } from "react";
import {
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';
import { Svg } from 'expo';
import { Content, Accordion } from "native-base";
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

const HabitCards = props => {
  if (props.data.loading){
    return <Loading/>
  } else if (props.data.error) {
      return <Text>Error Loading Data!!</Text>
  }
  
  console.log(props.data)

  const dataArray = props.data.getAllHabits.map(item => {
    return { 
      title: item.name,
      content: 'WIAUGIUAW'
    }
   })

  return (
      <Content padder>
        <Accordion dataArray={ dataArray } expanded={0}/>
        <CreateHabitButton refetch={() => props.data.refetch()}/>
      </Content>
  );
}

export default GetAllHabits(HabitCards);
