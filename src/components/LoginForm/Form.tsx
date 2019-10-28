import React from 'react';
import { SignupButton } from '../';
import { ButtonText } from '../basic';
import { LoginButton, LoginInput, LoginView } from './login_style';
import { FormLabel } from '../basic/form_label';

export default LoginForm = props => (
    <LoginView>
        <FormLabel>Email</FormLabel>
        <LoginInput 
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
        <LoginInput 
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
            <ButtonText>LOG IN</ButtonText>
        </LoginButton>
        <SignupButton />
    </LoginView>
)