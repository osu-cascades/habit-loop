import Expo from 'expo';
import React from 'react';
import RootApp from './App';

class App extends React.Component {
  render() {
    return <RootApp />;
  }
}

Expo.registerRootComponent(App);