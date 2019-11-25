import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Button, ButtonText } from '../basic';
import { StyleSheet } from 'react-native';

export class CreateGroupButton extends Component {
    handlePress = () => {
        this.props.navigation.navigate('CreateGroup');
    }

    render() {
        return (
            <Button onPress={this.handlePress} style={styles.createGroupb}>
                <ButtonText>Create Group</ButtonText>
            </Button>
        );
    }
}

const styles = StyleSheet.create({
    createGroupb: {
        backgroundColor: '#E6B43C'
    }
})

export default compose(
    withNavigation,
)(CreateGroupButton);