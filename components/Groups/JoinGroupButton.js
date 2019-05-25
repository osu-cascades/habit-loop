import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Button, ButtonText } from '../basic';

export class JoinGroupButton extends Component {     
    handlePress = () => {
        this.props.navigation.navigate('JoinGroup');
    }

    render() {
        return (
            <Button onPress={this.handlePress}>
                <ButtonText>Join Group</ButtonText>
            </Button>
        );
    }
}

export default compose(
  withNavigation,
)(JoinGroupButton);