import React from 'react';
import { Button, ButtonText, Input, Logo } from '../basic';
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
`;

export default SignupComponent = props => (
    <SignupContainer behavior='padding'>
        <Logo source={require('../../assets/images/lt.png')} />
        <SignupText>Sign up for a new CBT Habit Tracker Account!</SignupText>
        <Input
            placeholder="username"
            placeholderTextColor='#666'
            returnKeyType='next'
            value={props.values.username}
            onChangeText={props.handleChange('username')}
            onBlur={() => props.setFieldTouched('username')}
            error={props.touched.username && props.errors.username}
            onSubmitEditing={() => this.emailInput.focus()}
        />
        <Input
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
        <Input
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
            <ButtonText>SIGNUP</ButtonText>
        </Button>
    </SignupContainer>
);