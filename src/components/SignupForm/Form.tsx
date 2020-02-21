import React from 'react';
import { ButtonText, Logo } from '../basic';
import { Button, SignupContainer, SignupText, SignupView, SignupInput, SButton, SectionStyle, IconForm } from './signup_styles';
import { FormLabel } from '../basic/form_label';

export default SignupComponent = props => (
    <SignupContainer behavior='padding'>
        <Logo source={require('../../assets/images/logo.jpg')} />
        <SignupText>Sign Up</SignupText>
        <SignupView>
            <SectionStyle>
                <IconForm source={require('../../assets/images/prof.png')} />
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
            </SectionStyle>
            <SectionStyle>
                <IconForm source={require('../../assets/images/prof.png')} />
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
            </SectionStyle>
            <SectionStyle>
                <IconForm source={require('../../assets/images/lock.png')} />
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
            </SectionStyle>
            <SButton
                onPress={props.handleSubmit}
                disabled={!props.isValid}
            >
                <ButtonText>SIGN UP</ButtonText>
            </SButton>
        </SignupView>
    </SignupContainer>
);