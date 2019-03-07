import React from 'react';
import styled from 'styled-components/native';

const Input = styled.TextInput`
    height: 40;
    background-color: rgba(255,255,255,0.2);
    margin-bottom: 10;
    padding-horizontal: 10;
    font-family: Avenir Next;
    border: ${props => props.error ? '1px solid tomato' : 'transparent'}
`;

export default Input;