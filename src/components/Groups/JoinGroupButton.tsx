import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Button, ButtonText } from '../basic';
import { StyleSheet } from 'react-native';

export { styles }
export class JoinGroupButton extends Component {
    handlePress = () => {
        this.props.navigation.navigate('JoinGroup');
    }

    render() {
        return (
            <Button onPress={this.handlePress} style={styles.joinGroupb}>
                <ButtonText>Join Group</ButtonText>
            </Button>
        );
    }
}

const styles = StyleSheet.create({
    joinGroupb: {
        backgroundColor: '#E6B43C'
    }
})

export default compose(
    withNavigation,
)(JoinGroupButton);