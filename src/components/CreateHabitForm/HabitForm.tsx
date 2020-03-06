import React from 'react';
import { ButtonText, Input, Picker } from '../basic';
import { Container, AddButton, CreateInput } from './create_habit_styles';

export const HabitForm = props => {
  return (
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
        onSubmitEditing={() => recurrenceInput.focus()}
        error={props.touched.type && props.errors.type}
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
        selectedValue={props.values.recurrence}
        mode={'dropdown'}
        error={props.touched.recurrence && props.errors.recurrence}
      />
      <AddButton onPress={props.handleSubmit} disabled={!props.isValid}>
        <ButtonText>Create New Habit</ButtonText>
      </AddButton>
    </Container>
  );
};
