import React, { useEffect } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export const AuthLoadingScreen = () => {
  const { navigate } = useNavigation();

  // Fetch the token from storage then navigate to our appropriate place
  useEffect(async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigate(userToken ? 'Main' : 'Auth');
  });

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};
