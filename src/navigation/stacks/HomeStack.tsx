import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, CreateGroupScreen, JoinGroupScreen } from '@src/navigation/screens';
import { Image } from 'react-native';
import ActionBarImage from './ActionBarImage.js';

const { Navigator, Screen } = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 140, height: 25 }}
      source={require('../../assets/images/lt.png')}
    />
  );

}
export const HomeStack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      <Screen name="CreateGroup" component={CreateGroupScreen} options={{ title: '' }} />
      <Screen name="JoinGroup" component={JoinGroupScreen} options={{ title: '' }} />
    </Navigator>
  );
};
