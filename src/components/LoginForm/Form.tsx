import React, { useRef } from 'react';
import SignupButton from '../SignupForm/SignupButton';
import { ButtonText } from '../basic';
import { LoginButton, LoginInput, LoginView, InvalidLoginText } from './login_styles';
import { FormLabel } from '../basic/form_label';

const setNextInput = (ref: React.MutableRefObject<TextInput | null>) => {
  return ref.current && ref.current.focus();
};

export default LoginForm = props => {
  const passwordElement = useRef(null);

  return (
    <LoginView>
      <FormLabel>Email</FormLabel>
      <LoginInput
        placeholder="email"
        placeholderTextColor="#666"
        onChangeText={props.handleChange('email')}
        onBlur={() => props.setFieldTouched('email')}
        keyboardType="email-address"
        returnKeyType="next"
        value={props.values.email}
        autoCapitalize="none"
        autoCorrect={false}
        onSubmitEditing={() => setNextInput(passwordElement)}
        error={props.touched.email && props.errors.email}
      />
      <FormLabel>Password</FormLabel>
      <LoginInput
        placeholder="password"
        placeholderTextColor="#666"
        onChangeText={props.handleChange('password')}
        onBlur={() => props.setFieldTouched('password')}
        value={props.values.password}
        textContentType="password"
        returnKeyType="done"
        secureTextEntry
        ref={passwordElement}
        error={props.touched.password && props.errors.password}
      />
      <InvalidLoginText>{props.loginError && 'Invalid username/password.'}</InvalidLoginText>
      <LoginButton
        onPress={props.handleSubmit}
        // disabled={!props.isValid}
      >
        <ButtonText>LOG IN</ButtonText>
      </LoginButton>
      <SignupButton />
    </LoginView>
  );
};
