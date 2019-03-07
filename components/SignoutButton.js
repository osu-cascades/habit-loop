import React, { Component } from 'react';
import {
  AsyncStorage,
  Text
} from 'react-native';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Button, ButtonText } from './basic';

export class SignoutButton extends Component {
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
        
  render() {
    return (
        <Button block onPress={this._signOutAsync} >
            <ButtonText>Actually, sign me out :)</ButtonText>
        </Button>
    );
  }
}

export default compose(
  withNavigation,
)(SignoutButton);