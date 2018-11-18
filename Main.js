import Expo from 'expo';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AppNavigator from './navigation/AppNavigator';

// Not able to be used with localhost
const client = new ApolloClient({
    uri: "http://192.168.0.11:4000/graphql"
})

class App extends React.Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <AppNavigator />
        </ApolloProvider>
    );
  }
}

Expo.registerRootComponent(App);