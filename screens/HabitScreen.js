import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';

import HabitList from '../components/HabitList';

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
