import React from 'react';
import { Button, ButtonText, Input, Picker } from '../../basic';
import styled from 'styled-components/native';

const Container = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
`;

export default JoinGroupForm = props => (
    <Container>
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