import React from 'react';
import { Button, ButtonText } from '../../basic';
import styled from 'styled-components/native';
import Picker from './Picker';

const Container = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
`;

export default JoinGroupForm = props => (
    <Container>
      <Picker 
        {...props}
      />
      <Button
          onPress={props.handleSubmit}
          disabled={!props.isValid}
      >
        <ButtonText>
          JOIN 
        </ButtonText>
      </Button>
    </Container>
);