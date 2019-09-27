import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Button, ButtonText } from '../basic';

export class CreateGroupButton extends Component {     
    handlePress = () => {
        this.props.navigation.navigate('CreateGroup');
    }

    render() {
        return (
            <Button onPress={this.handlePress}>
                <ButtonText>Create Group</ButtonText>
            </Button>
        );
    }
}

export default compose(
  withNavigation,
)(CreateGroupButton);