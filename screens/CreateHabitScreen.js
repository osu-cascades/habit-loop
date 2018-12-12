import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container } from 'native-base';

import CreateHabitForm from '../components/CreateHabitForm';


export default class CreateHabitScreen extends React.Component {
  
  render() {
    return (
      <Container style={styles.container}>
        <CreateHabitForm />
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});