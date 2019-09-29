import React from 'react';
import { Button, ButtonText, Input, Picker } from '../basic';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const Container = styled.KeyboardAvoidingView`
  padding: 20px;
  background-color: #ffffff;
`;

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
        onSubmitEditing={() => this.typeInput.focus()}
        error={props.touched.name && props.errors.name}
      />
      <Input
        placeholder="Type"
        placeholderTextColor="#666"
        value={props.values.type}
        returnKeyType="go"
        onBlur={() => props.setFieldTouched('type')}
        onChangeText={props.handleChange('type')}
        ref={input => (this.typeInput = input)}
        onSubmitEditing={() => this.recurrenceInput.focus()}
        error={props.touched.type && props.errors.type}
      />
      <Picker
        placeholder={{ label: 'Recurrence', value: 'null', color: '#9EA0A4' }}
        values={'recurrences'}
        onValueChange={props.handleChange('recurrence')}
        selectedValue={props.values.recurrence}
        mode={'dropdown'}
        error={props.touched.recurrence && props.errors.recurrence}
      />
      <Button style={styles.addBtn} onPress={props.handleSubmit} disabled={!props.isValid}>
        <ButtonText>Create New Habit</ButtonText>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: '#F78E2A',
  },
});
