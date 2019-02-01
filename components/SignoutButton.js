import React, { Component } from 'react';
import {
  AsyncStorage,
  Text
} from 'react-native';
import { Button  } from 'native-base';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';

export class SignoutButton extends Component {
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
        
  render() {
    return (
        <Button block onPress={this._signOutAsync} >
            <Text>Actually, sign me out :)</Text>
        </Button>
    );
  }
}

export default compose(
  withNavigation,
)(SignoutButton);