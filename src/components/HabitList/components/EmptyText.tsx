import React from 'react';
import styled from 'styled-components/native'

const EmptyText = styled.Text`
    font-family: Avenir Next;
    font-size: 20px;
    align-self: center;
    font-weight: bold;
    margin-top: 12px;
`;

export default () => <EmptyText> Add a new habit below! </EmptyText>