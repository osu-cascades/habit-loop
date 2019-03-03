import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';

import GoalsList from '../components/GoalsList';

export default class UserHabitScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const habit = navigation.getParam('habit', {});

        return {
            title: habit.name,
        }
    };

  
  render() {
    return (
      <Container style={styles.container}>
        {/* <ResourceList /> */}
        <GoalsList />
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});
