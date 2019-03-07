import React from 'react';
import { Text } from 'react-native';
import { Button, ButtonText, Input } from '../basic';
import styled from 'styled-components/native';

const SignupContainer = styled.KeyboardAvoidingView`
    padding: 20px;
    flex: 1;
    justify-content: center;
    background-color: #E9E9E9;
`;

const SignupText = styled.Text`
    margin-bottom: 10;
    text-align: center;
    font-family: Avenir Next;
`

export default SignupComponent = props => (
    <SignupContainer behavior='padding'>
        <SignupText>Sign up for a new CBT Habit Tracker Account!</SignupText>
        <Input
            placeholder="username" 
            value={props.values.username}
            onChangeText={props.handleChange('username')}
        />
        <Input
            placeholder="email" 
            value={props.values.email}
            onChangeText={props.handleChange('email')}
            keyboardType='email-address'
            autoCapitalize='none'
        />
        <Input
            placeholder="password"
            value={props.values.password}
            onChangeText={props.handleChange('password')}
            textContentType="password"
            secureTextEntry
        />
        {props.touched.password && props.errors.password && <Text>{props.errors.password}</Text>}
        <Button 
            onPress={props.handleSubmit}
        >
            <ButtonText>SIGNUP</ButtonText>
        </Button>
    </SignupContainer>
);