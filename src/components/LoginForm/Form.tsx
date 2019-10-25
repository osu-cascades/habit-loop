import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { SignupButton } from '../';
import { Button, ButtonText, Input } from '../basic';
import styled from 'styled-components/native';

export const FormLabel = styled.Text`
    font-family: Avenir Next;
    color: #000;
    opacity: 0.5;
`;

export const LoginButton = styled.TouchableOpacity`
    background-color: #000;
    padding-vertical: 10;
    margin-top: 10;
    border-radius: 5;
`;

export const LoginView = styled.View`
    padding: 20px;
    border-radius: 5;
    background-color: #CCC
`;

export default LoginForm = props => (
    <LoginView>
        <FormLabel>Email</FormLabel>
        <Input 
            placeholder="email" 
            placeholderTextColor='#666'
            onChangeText={props.handleChange('email')}
            onBlur={() => props.setFieldTouched('email')}
            keyboardType='email-address'
            returnKeyType="next"
            value={props.values.email}
            autoCapitalize='none'
            autoCorrect={false}
            onSubmitEditing={() => this.passwordInput.focus()}
            error={props.touched.email && props.errors.email}
        />
        <FormLabel>Password</FormLabel>
        <Input 
            placeholder="password" 
            placeholderTextColor='#666'
            onChangeText={props.handleChange('password')}
            onBlur={() => props.setFieldTouched('password')}
            value={props.values.password}
            textContentType="password"
            returnKeyType="done"
            secureTextEntry
            ref={input => this.passwordInput = input}
            error={props.touched.password && props.errors.password}
        />
        <LoginButton
            onPress={props.handleSubmit}
            // disabled={!props.isValid}
        > 
            <ButtonText>LOGIN</ButtonText>
        </LoginButton>
        <SignupButton />
    </LoginView>
)