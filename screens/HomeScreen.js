import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Constants } from 'expo';
import { People } from '../components/People';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.heading}>
        CBT Habit Loop
        </Text>
        <Text style={styles.paragraph}>
          [Insert Logo here]
        </Text>
        <View style={styles.login}>
          <Text style={styles.login.text}>
          Username:
          </Text>
          <Text style={styles.login.text}>
          Password:
          </Text>
        </View>
        <People/>
      </View>
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
