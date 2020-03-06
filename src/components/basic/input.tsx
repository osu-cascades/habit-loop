import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { default as PickerComponent } from 'react-native-picker-select';
import { ArrowDownIcon } from '@src/assets/svgs';
import _ from 'lodash';

export const Input = styled.TextInput`
  border-bottom-width: ${props => (props.error ? '2px' : '2px')}
  border-bottom-color: ${props => (props.error ? 'tomato' : '#999999')}
  height: 40;
  padding-horizontal: 10;
  font-family: Avenir Next;
  margin-top: 20;
`;

const recurrences = [
  {
    label: 'Daily',
    value: 'DAILY',
  },
  {
    label: 'Weekly',
    value: 'WEEKLY',
  },
];

const priority = [
  {
    label: 'Top',
    value: 'TOP',
  },
  {
    label: 'Mid',
    value: 'MID',
  },
  {
    label: 'Low',
    value: 'LOW',
  },
];

const trainedFor = [
  {
    label: '30 Minutes',
    value: 1800,
  },
  {
    label: '60 Minutes',
    value: 3600,
  },
  {
    label: '90 Minutes',
    value: 5400,
  },
  {
    label: '120 Minutes',
    value: 7200,
  },
];

const pickerItems = {
  recurrences,
  priority,
  trainedFor,
};

export const Picker = props => (
  <PickerComponent
    style={styles}
    items={pickerItems[props.values]}
    // Icon={() => <ArrowDownIcon width={24} />} // curently bugged
    {...props}
  />
);

const styles = StyleSheet.create({
  inputIOS: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    height: 40,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {},
  inputAndroid: {
    fontFamily: 'Avenir Next',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    height: 40,
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#999999',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
