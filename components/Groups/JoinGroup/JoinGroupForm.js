import React from 'react';
import { Button, ButtonText, Input, Picker } from '../../basic';
import styled from 'styled-components/native';

const Container = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
`;

export default JoinGroupForm = props => (
    <Container>
      <Picker 
          placeholder={{ label: 'Groups', value: 'null', color: '#9EA0A4' }}
          values={'groups'}
          onValueChange={props.handleChange('groups')}
          selectedValue={props.values.groups}
          mode={'dropdown'}
          error={props.touched.groups && props.errors.groups}
      />
      <Button
          onPress={props.handleSubmit}
          disabled={!props.isValid}
      >
        <ButtonText>
          JOIN {console.log(props)}
        </ButtonText>
      </Button>
    </Container>
);