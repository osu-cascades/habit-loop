import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { ButtonText } from '../basic';
import { Button } from './signup_style'

export class SignupButton extends Component {     
    handlePress = () => {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return (
            <Button onPress={this.handlePress}>
                <ButtonText>SIGN UP</ButtonText>
            </Button>
        );
    }
}

export default compose(
  withNavigation,
)(SignupButton);