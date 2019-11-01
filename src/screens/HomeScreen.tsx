import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground
} from 'react-native';
import {
  Container, View
} from 'native-base';
import Constants from 'expo-constants';
import {
  PushNotifications,
  SignoutButton,
  PriorityHabit,
  Streak
} from '../components';
import {
  CreateGroupButton,
  JoinGroupButton,
} from '../components/Groups';
import {
  Logo
} from '../components/basic';

import Groups from '../components/LeaderboardTabs'
import { relative } from 'path';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.intro}>Welcome to the CBT Nuggets Habit Loop!</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground
            source={require('../assets/images/cbtFlameIcon-sml.png')}
            style={styles.flameIconImage}
          >
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.streakNum}>
              <Streak />
            </Text>
          </ImageBackground>
        </View>
        <CreateGroupButton />
        <JoinGroupButton />
        <Groups />
        {/* <PriorityHabit /> */}
        {/* <PushNotifications /> */}

      </Container >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,

  },
  intro: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30
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
  },
  flameIconImage: {
    width: 100,
    height: 143,
    position: 'relative',
    textAlign: 'center',
    top: 0,
    left: 0,
  },

  streakNum: {
    fontSize: 25,
    textAlignVertical: 'center',
    alignSelf: 'center',
    marginTop: 78,
  }
});
