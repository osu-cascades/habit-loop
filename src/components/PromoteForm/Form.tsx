import React, { useRef } from 'react';
import { PromoteButton, PromoteInput, PromoteView, SectionStyle, TitleText } from './promote_styles';
import { ButtonText } from '../basic';

export default PromoteForm = props => {
  return (
    <PromoteView>
      <TitleText>Promote User</TitleText>
      <SectionStyle>
        <PromoteInput
          placeholder="Username"
          placeholderTextColor="#666"
          onChangeText={props.handleChange('username')}
          onBlur={() => props.setFieldTouched('username')}
          // value={props.values.email}
          autoCapitalize="none"
          autoCorrect={false}
          error={props.touched.username && props.errors.username}
        />
      </SectionStyle>
      <PromoteButton onPress={props.handleSubmit} disabled={!props.isValid}>
        <ButtonText>Promote</ButtonText>
      </PromoteButton>
    </PromoteView>
  );
};
