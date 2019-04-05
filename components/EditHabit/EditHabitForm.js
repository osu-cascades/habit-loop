import React from 'react';
import { Button, ButtonText, Input } from '../basic';
import styled from 'styled-components/native';

const Container = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
`;

export default EditHabitForm = props => (
    <Container>
      <Input
          placeholder="Name" 
          placeholderTextColor='#666'
          value={props.values.name}
          returnKeyType='next'
          onBlur={() => props.setFieldTouched('name')}
          onChangeText={props.handleChange('name')}
          onSubmitEditing={() => this.typeInput.focus()}
          error={props.touched.name && props.errors.name}
      />
      <Input
          placeholder="Type"
          placeholderTextColor='#666'
          value={props.values.type}
          returnKeyType="go"
          onBlur={() => props.setFieldTouched('type')}
          onChangeText={props.handleChange('type')}
          ref={input => this.typeInput = input}
          error={props.touched.type && props.errors.type}
      />
      <Button
          onPress={props.handleSubmit}
          disabled={!props.isValid}
      >
        <ButtonText>
          UPDATE
        </ButtonText>
      </Button>
    </Container>
);