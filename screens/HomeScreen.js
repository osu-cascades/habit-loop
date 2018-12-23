import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Container
} from 'native-base';
import { Constants } from 'expo';
import LoginForm from '../components/LoginForm';
import LoginButton from '../components/LoginButton';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'CBT Habit Loop',
  };

  render() {
    return (
      <Container>
        <LoginForm />
        <LoginButton />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  login: {
    flex: 1,
    width: 200,
    padding: 100,
    // border: '1px solid black',
    // text: {
    //   width:'50%',
    //   textAlign: 'left',
    //   fontSize: '20px',
    // }
  }
});
