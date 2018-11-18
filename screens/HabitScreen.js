import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HabitList from '../components/HabitList';

export default class HabitScreen extends React.Component {
  static navigationOptions = {
    title: 'Habits',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <HabitList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
