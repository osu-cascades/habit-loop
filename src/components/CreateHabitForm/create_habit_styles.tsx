import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  padding: 20px;
  background-color: #ffffff;
  height: 100%;
`;

export const AddButton = styled.TouchableOpacity`
  padding-vertical: 15;
  margin-top: 10;
  border-radius: 5;
  background-color: #F78E2A;
`;

export const CreateInput = styled.TextInput`
  border-bottom-width: ${props => (props.error ? '2px' : '2px')}
  border-bottom-color: ${props => (props.error ? 'tomato' : '#999999')}
  height: 40;
  padding-horizontal: 10;
  font-family: Avenir Next;
  margin-top: 20;
`;