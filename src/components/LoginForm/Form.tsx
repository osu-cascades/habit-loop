import React, { useRef } from 'react';
import SignupButton from '../SignupForm/SignupButton';
import { ButtonText } from '../basic';
import { LoginButton, LoginInput, LoginView, InvalidLoginText, SectionStyle, IconForm, TitleText } from './login_styles';
import { FormLabel } from '../basic/form_label';
import { Text, Icon } from 'native-base';
import { Image, StyleSheet, View } from 'react-native';

const setNextInput = (ref: React.MutableRefObject<TextInput | null>) => {
  return ref.current && ref.current.focus();
};

export default LoginForm = props => {
  const passwordElement = useRef(null);

  return (
    <LoginView>
      <TitleText>Log In</TitleText>
      <SectionStyle>
        <IconForm source={require('../../assets/images/prof.png')} />
        <LoginInput
          placeholder="email@cbtnuggets.com"
          placeholderTextColor="#666"
          onChangeText={props.handleChange('email')}
          onBlur={() => props.setFieldTouched('email')}
          keyboardType="email-address"
          returnKeyType="next"
          // value={props.values.email}
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => setNextInput(passwordElement)}
          error={props.touched.email && props.errors.email}
        />
      </SectionStyle>
      <SectionStyle>
        <IconForm source={require('../../assets/images/lock.png')} />
        <LoginInput
          placeholder="password"
          placeholderTextColor="#666"
          onChangeText={props.handleChange('password')}
          onBlur={() => props.setFieldTouched('password')}
          // value={props.values.password}
          textContentType="password"
          returnKeyType="done"
          secureTextEntry
          ref={passwordElement}
          error={props.touched.password && props.errors.password}
        />
      </SectionStyle>
      <InvalidLoginText>{props.loginError && 'Invalid username/password.'}</InvalidLoginText>
      <SignupButton />
      <LoginButton
        onPress={props.handleSubmit}
      // disabled={!props.isValid}
      >
        <ButtonText>Log In</ButtonText>
      </LoginButton>

    </LoginView>
  );
};
