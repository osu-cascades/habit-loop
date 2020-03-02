import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
    height: 100%;
`;

export const EditInput = styled.TextInput`
    border-bottom-width: ${props => (props.error ? '2px' : '2px')}
    border-bottom-color: ${props => (props.error ? 'tomato' : '#999999')}
    height: 40;
    padding-horizontal: 10;
    font-family: Avenir Next;
    margin-top: 20;
`;

export const UpdateButton = styled.TouchableOpacity`
  background-color: #E6B43C;
  padding-vertical: 15;
  width: 95%;
  margin: 0 auto;
  margin-top: 10;
  border-radius: 100;
`;