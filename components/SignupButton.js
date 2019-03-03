import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';

export class SignupButton extends Component {     
    handlePress = () => {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SIGNUP</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#999999',
      paddingVertical: 15,
      marginTop: 10
    },
    buttonText: {
      textAlign: 'center',
      fontFamily: 'Avenir Next',
      color: '#FFFFFF',
      fontWeight: '700',
    }
});

export default compose(
  withNavigation,
)(SignupButton);