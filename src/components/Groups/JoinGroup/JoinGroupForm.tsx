import React from 'react';
import { Button, ButtonText } from '../../basic';
import { Container } from './join_group_styles';
import Picker from './Picker';
import { StyleSheet } from 'react-native'

export const JoinGroupForm = props => (
    <Container>
        <Picker {...props} />
        <Button onPress={props.handleSubmit} disabled={!props.isValid} style={styles.JoinGroupButtonStyle}>
            <ButtonText>JOIN</ButtonText>
        </Button>
    </Container>
);

const styles = StyleSheet.create({
    JoinGroupButtonStyle: {
        backgroundColor: '#E6B43C'
    }
})
