import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { Button  } from 'native-base';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';

export class SignupButton extends Component {     
    handlePress = () => {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return (
            <Button block onPress={this.handlePress} >
                <Text>Signup</Text>
            </Button>
        );
    }
}

export default compose(
  withNavigation,
)(SignupButton);