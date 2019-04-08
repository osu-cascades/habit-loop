import React from 'react';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    background-color: #999999;
    padding-vertical: 15;
    margin-top: 10;
    border-radius: 5;
`;

export const ButtonText = styled.Text`
    textAlign: center;
    fontFamily: Avenir Next;
    color: #FFFFFF;
    fontWeight: 700;
`;


// const HabitHeader = styled.TouchableHighlight`
//   flex: 1;
//   height: 80;
//   padding-vertical: 10;
//   padding-horizontal: 20;
//   justify-content: space-between;
//   flex-direction: column;
//   background-color: white;
// `;

// const HabitText = styled.Text`
//   align-self: center;
//   font-size: 20px;
//   font-family: Avenir Next;
//   margin-top: 15px;
// `;