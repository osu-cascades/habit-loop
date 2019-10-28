import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { ButtonText } from './basic';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    background-color: #666;
    padding-vertical: 10;
    width: 200;
    margin: 0 auto;
    margin-top: 10;
    border-radius: 5;
`;

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