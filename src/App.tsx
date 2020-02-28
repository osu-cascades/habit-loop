import React, { Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';
import { AsyncStorage } from 'react-native';
import { Loading } from '@src/components';

import { createStackNavigator } from '@react-navigation/stack';

import { AuthStack, AuthLoadingScreen, BottomTabNavigator } from '@src/navigation';
import { NavigationNativeContainer } from '@react-navigation/native';

// http://10.0.2.2:3000/graphql -> for android emulator (or something similar)
// http://localhost:3000/graphql -> what works most of the time with the local server

const client = new ApolloClient({
  // uri: 'https://8tntvz34m4.execute-api.us-east-1.amazonaws.com/qa/graphql',
  uri: 'https://8n4s5ygsif.execute-api.us-east-1.amazonaws.com/qa/graphql',
  //uri: 'http://localhost:3000/graphql',
  // uri: "http://192.168.0.11:3000/graphql",
  request: async operation => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
  },
});

const { Navigator, Screen } = createStackNavigator();

export default () => {
  return (
    <Suspense fallback={<Loading />}>
      <ApolloProvider client={client}>
        <NavigationNativeContainer>
          <Navigator initialRouteName="AuthLoading" headerMode="none">
            <Screen name="AuthLoading" component={AuthLoadingScreen} />
            <Screen name="Auth" component={AuthStack} />
            <Screen name="Main" component={BottomTabNavigator} />
          </Navigator>
        </NavigationNativeContainer>
      </ApolloProvider>
    </Suspense>
  );
};
