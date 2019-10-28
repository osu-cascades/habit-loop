import React from 'react';
import { ButtonText, Input, Logo } from '../basic';
import { Button } from '../SignupButton';
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
    background-color: rgba(255, 255, 255, 0.9);
    margin-bottom: 10;
    padding-horizontal: 10;
    font-family: Avenir Next;
    border: ${props => (props.error ? '1px solid tomato' : '1px solid #999999')}
    border-radius: 4px;
`;

export default SignupComponent = props => (
    <SignupContainer behavior='padding'>
        <Logo source={require('../../assets/images/lt.png')} />
        <SignupText>Sign up for a new CBT Habit Tracker Account!</SignupText>
        <SignupView>
            <SignupInput
                placeholder="username"
                placeholderTextColor='#666'
                returnKeyType='next'
                value={props.values.username}
                onChangeText={props.handleChange('username')}
                onBlur={() => props.setFieldTouched('username')}
                error={props.touched.username && props.errors.username}
                onSubmitEditing={() => this.emailInput.focus()}
            />
            <SignupInput
                placeholder="email"
                placeholderTextColor='#666'
                value={props.values.email}
                onChangeText={props.handleChange('email')}
                onBlur={() => props.setFieldTouched('email')}
                keyboardType='email-address'
                autoCapitalize='none'
                returnKeyType='next'
                ref={input => this.emailInput = input}
                onSubmitEditing={() => this.passwordInput.focus()}
                error={props.touched.email && props.errors.email}
            />
            <SignupInput
                placeholder="password"
                placeholderTextColor='#666'
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                onBlur={() => props.setFieldTouched('password')}
                textContentType="password"
                returnKeyType="go"
                secureTextEntry
                ref={input => this.passwordInput = input}
                error={props.touched.password && props.errors.password}
            />
            <Button 
                onPress={props.handleSubmit}
                disabled={!props.isValid}
            >
                <ButtonText>SIGN UP</ButtonText>
            </Button>
        </SignupView>
    </SignupContainer>
);