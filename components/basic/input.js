import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Picker from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

export const Input = styled.TextInput`
    height: 40;
    background-color: rgba(255,255,255,0.2);
    margin-bottom: 10;
    padding-horizontal: 10;
    font-family: Avenir Next;
    border: ${props => props.error ? '1px solid tomato' : '1px solid #999999'}
    border-radius: 4px;
`;

const recurrences = [
    {
        label: 'Daily',
        value: 'DAILY',
    },
    {
        label: 'Weekly',
        value: 'WEEKLY',
    }
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
    }
]

const test_groups = [
    {
        label: 'FADS',
        value: 'group-760c118b-0999-42b1-94c3-de1788f87873',
    }
]

const pickerItems = {
    recurrences,
    priority,
    groups: test_groups,
}

export const PickerHoc = props => <Picker 
    style={styles}
    items={pickerItems[props.values]}
    Icon={() => <Ionicons name="md-arrow-down" size={24} color="gray" />}
    {...props}
/>

const styles = StyleSheet.create({
    inputIOS: {
        fontFamily: 'Avenir Next',
        fontSize: 15,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontFamily: 'Avenir Next',
        fontSize: 15,
        paddingHorizontal: 5,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#999999',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
})