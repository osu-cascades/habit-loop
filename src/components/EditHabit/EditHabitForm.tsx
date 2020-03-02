import React from 'react';
import { Button, ButtonText, Input, Picker } from '../basic';
import { Container, EditInput, UpdateButton } from './edit_habit_styles';

export default EditHabitForm = props => (
  <Container>
    <EditInput
      placeholder="Name"
      placeholderTextColor="#666"
      value={props.values.name}
      returnKeyType="next"
      onBlur={() => props.setFieldTouched('name')}
      onChangeText={props.handleChange('name')}
      onSubmitEditing={() => typeInput.focus()}
      error={props.touched.name && props.errors.name}
    />
    <EditInput
      placeholder="Type"
      placeholderTextColor="#666"
      value={props.values.type}
      returnKeyType="go"
      onBlur={() => props.setFieldTouched('type')}
      onChangeText={props.handleChange('type')}
      ref={input => (typeInput = input)}
      error={props.touched.type && props.errors.type}
    />
    <EditInput
      placeholder="Links"
      placeholderTextColor="#666"
      value={props.values.links}
      returnKeyType="go"
      onBlur={() => props.setFieldTouched('links')}
      onChangeText={props.handleChange('links')}
      ref={input => (typeInput = input)}
      error={props.touched.links && props.errors.links}
    />
    <Picker
      placeholder={{ label: 'Time Trained', value: 'null', color: '#9EA0A4' }}
      values={'trainedFor'}
      onValueChange={props.handleChange('trainedFor')}
      value={props.values.trainedFor}
      mode={'dropdown'}
      error={props.touched.trainedFor && props.errors.trainedFor}
    />
    <Picker
      placeholder={{ label: 'Recurrence', value: 'null', color: '#9EA0A4' }}
      values={'recurrences'}
      onValueChange={props.handleChange('recurrence')}
      value={props.values.recurrence}
      mode={'dropdown'}
      error={props.touched.recurrence && props.errors.recurrence}
    />
    <UpdateButton onPress={props.handleSubmit} disabled={!props.isValid}>
      <ButtonText>UPDATE</ButtonText>
    </UpdateButton>
  </Container>
);
