import React from 'react';
import { Button, ButtonText } from '../../basic';
import styled from 'styled-components/native';
import Picker from './Picker';
import { StyleSheet } from 'react-native'

const Container = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
`;

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
