import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Button, ButtonText } from './basic';

export class SignupButton extends Component {     
    handlePress = () => {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return (
            <Button onPress={this.handlePress}>
                <ButtonText>SIGNUP</ButtonText>
            </Button>
        );
    }
}

export default compose(
  withNavigation,
)(SignupButton);