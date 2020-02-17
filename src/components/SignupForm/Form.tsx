import React from 'react';
import { ButtonText, Logo } from '../basic';
import { Button, SignupContainer, SignupText, SignupView, SignupInput, SButton } from './signup_styles';
import { FormLabel } from '../basic/form_label';

export default SignupComponent = props => (
    <SignupContainer behavior='padding'>
        <Logo source={require('../../assets/images/lt.png')} />
        <SignupText>Sign up for a new CBT Habit Tracker Account!</SignupText>
        <SignupView>
            <FormLabel>Username</FormLabel>
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
            <FormLabel>Email</FormLabel>
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
            <FormLabel>Password</FormLabel>
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
            <SButton
                onPress={props.handleSubmit}
                disabled={!props.isValid}
            >
                <ButtonText>SIGN UP</ButtonText>
            </SButton>
        </SignupView>
    </SignupContainer>
);