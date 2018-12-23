import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container, Header } from 'native-base';

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
        <HabitList user_id={"123"}/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});
