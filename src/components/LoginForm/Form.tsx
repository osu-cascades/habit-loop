import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import { SignupButton } from '../';
import { Button, ButtonText, Input } from '../basic';

export default LoginForm = props => (
    <View>
        <Input 
            placeholder="username or email" 
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
        <Button 
            onPress={props.handleSubmit}
            // disabled={!props.isValid}
        > 
            <ButtonText>LOGIN</ButtonText>
        </Button>
        <SignupButton />
    </View>
)