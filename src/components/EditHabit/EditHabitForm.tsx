import React from 'react';
import { Button, ButtonText, Input, Picker } from '../basic';
import { Container } from './edit_habit_styles';

export default EditHabitForm = props => (
  <Container>
    <Input
      placeholder="Name"
      placeholderTextColor="#666"
      value={props.values.name}
      returnKeyType="next"
      onBlur={() => props.setFieldTouched('name')}
      onChangeText={props.handleChange('name')}
      onSubmitEditing={() => typeInput.focus()}
      error={props.touched.name && props.errors.name}
    />
    <Input
      placeholder="Type"
      placeholderTextColor="#666"
      value={props.values.type}
      returnKeyType="go"
      onBlur={() => props.setFieldTouched('type')}
      onChangeText={props.handleChange('type')}
      ref={input => (typeInput = input)}
      error={props.touched.type && props.errors.type}
    />
    <Input
      placeholder="Trained For (Minutes)"
      placeholderTextColor="#666"
      value={props.values.trainedFor}
      returnKeyType="go"
      onBlur={() => props.setFieldTouched('trainedFor')}
      onChangeText={props.handleChange('trainedFor')}
      ref={input => (typeInput = input)}
      onSubmitEditing={() => recurrenceInput.focus()}
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
    <Input
      placeholder="Links"
      placeholderTextColor="#666"
      value={props.values.links}
      returnKeyType="go"
      onBlur={() => props.setFieldTouched('links')}
      onChangeText={props.handleChange('links')}
      ref={input => (typeInput = input)}
      error={props.touched.links && props.errors.links}
    />
    <Button onPress={props.handleSubmit} disabled={!props.isValid}>
      <ButtonText>UPDATE</ButtonText>
    </Button>
  </Container>
);
