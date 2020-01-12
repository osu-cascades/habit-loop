import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container } from 'native-base';
import Constants from 'expo-constants';
import { PushNotifications, SignoutButton, PriorityHabit, StreakImage } from '@src/components';
import { CreateGroupButton, JoinGroupButton } from '@src/components/Groups';
import { Logo } from '../components/basic';

export const HomeScreen = () => {
  return (
    <Container style={styles.container}>
      <Logo source={require('../assets/images/lt.png')} />
      <Text style={styles.intro}>Welcome to the CBT Nuggets Habit Loop!</Text>
      <StreakImage />
      <CreateGroupButton />
      <JoinGroupButton />
      {/* <PriorityHabit /> */}
      {/* <PushNotifications /> */}
      <SignoutButton />
    </Container>
  );
};

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
    marginBottom: 30,
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
});
