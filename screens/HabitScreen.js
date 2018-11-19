import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container } from 'native-base';

import HabitList from '../components/HabitList';
import MainCard from '../components/MainCard';
import GoalsList from '../components/GoalsList';

export default class HabitScreen extends React.Component {
  static navigationOptions = {
    title: 'Habits',
  };

  render() {
    return (
      <Container style={styles.container}>
        <HabitList />
        <Container>
          <MainCard text="Goals for this week"/>
          <GoalsList />
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});
