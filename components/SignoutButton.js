import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage,
  Text
} from 'react-native';
import { withApollo, compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Button, ButtonText } from './basic';

export class SignoutButton extends Component {
    _signOutAsync = async () => {
        const { client } = this.props;

        await AsyncStorage.clear();
        client.cache.reset();
        this.props.navigation.navigate('Auth');
    };
        
  render() {
    return (
        <Button block onPress={this._signOutAsync} style={styles.signOut}>
            <ButtonText>Sign out</ButtonText>
        </Button>
    );
  }
}

const styles = StyleSheet.create({
  signOut: {
    backgroundColor: '#F78E2A',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20
  }
})

export default compose(
  withNavigation,
  withApollo,
)(SignoutButton);