import React from 'react';
import styled from 'styled-components/native';

export const SignupContainer = styled.KeyboardAvoidingView`
    padding: 20px;
    flex: 1;
    justify-content: center;
    background-color: #E9E9E9;
`;

export const SignupText = styled.Text`
    margin-bottom: 10;
    text-align: center;
    font-family: Avenir Next;
`;

export const SignupView = styled.View`
    padding: 20px;
    border-radius: 5;
    background-color: #E6B43C;
`;

export const SignupInput = styled.TextInput`
    height: 40;
    background-color: #E9E9E9;
    margin-bottom: 10;
    padding-horizontal: 10;
    font-family: Avenir Next;
    border: ${props => (props.error ? '1px solid tomato' : '1px solid #999999')}
    border-radius: 4px;
`;