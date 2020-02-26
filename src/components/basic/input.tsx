import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { default as PickerComponent } from 'react-native-picker-select';
import { useQuery, gql } from '@apollo/client';
import { Loading } from '@src/components';
import { ArrowDownIcon } from '@src/assets/svgs';
import _ from 'lodash';

const GET_ALL_GROUPS = gql`
  query getAllGroups {
    getAllGroups {
      group_name
      item_id
    }
  }
`;

export const Input = styled.TextInput`
    height: 40;
    background-color: rgba(255,255,255,0.2);
    margin-bottom: 5;
    margin-top: 5;
    padding-horizontal: 10;
    font-family: Avenir Next;
    border: ${props => (props.error ? '1px solid tomato' : '1px solid #999999')}
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

export const Picker = props => {
  const { data, loading } = useQuery(GET_ALL_GROUPS);

  if (loading) {
    return <Loading />;
  } else {
    const groups = data.getAllGroups.map(group => ({
      label: group.group_name,
      value: group.group_name.toUpperCase(),
    }));

    const pickerItems = {
      recurrences,
      priority,
      groups,
    };

    return (
      <PickerComponent
        style={styles}
        items={pickerItems[props.values]}
        // Icon={() => <ArrowDownIcon width={24} />} // curently bugged
        {...props}
      />
    );
  }
};

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
