import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage,
  Text
} from 'react-native';
import { withApollo, compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { ButtonText } from '../basic';
import { Button } from './signout_styles';

export class SignoutButton extends Component {
    _signOutAsync = async () => {
        const { client } = this.props;

        await AsyncStorage.clear();
        client.cache.reset();
        this.props.navigation.navigate('Auth');
    };
        
  render() {
    return (
        <Button block onPress={this._signOutAsync}>
            <ButtonText>Sign out</ButtonText>
        </Button>
    );
  }
}

export default compose(
  withNavigation,
  withApollo,
)(SignoutButton);