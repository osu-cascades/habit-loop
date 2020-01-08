import React, { Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import AppNavigator from './navigation/AppNavigator';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { AsyncStorage } from 'react-native';
import { Loading } from '@src/components';

import { createAppContainer } from 'react-navigation';

const AppNavContainer = createAppContainer(AppNavigator);

// http://10.0.2.2:3000/graphql -> for android emulator (or something similar)
// http://localhost:3000/graphql -> what works most of the time with the local server

const client = new ApolloClient({
  uri: 'https://8tntvz34m4.execute-api.us-east-1.amazonaws.com/qa/graphql',
  // uri: 'http://localhost:3000/graphql',
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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  async _cacheResourcesAsync() {
    const images = [require('./assets/images/lt.png')];

    const font = Font.loadAsync({
      'Avenir Next': require('./assets/fonts/AvenirNext-Regular.ttf'),
    });

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all([...cacheImages, font]);
  }

  render() {
    if (this.state.loading) {
      return <AppLoading startAsync={this._cacheResourcesAsync} onFinish={() => this.setState({ loading: false })} />;
    }

    return (
      <Suspense fallback={<Loading />}>
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <AppNavContainer />
          </ApolloHooksProvider>
        </ApolloProvider>
      </Suspense>
    );
  }
}

export default App;
