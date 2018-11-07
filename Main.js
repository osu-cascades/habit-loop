import Expo from 'expo';
import React from 'react';
import RootApp from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: "http://localhost:4000"
})

class App extends React.Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <RootApp />
        </ApolloProvider>
    );
  }
}

Expo.registerRootComponent(App);