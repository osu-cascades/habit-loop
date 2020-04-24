import React from 'react';
import { ButtonText } from '../../basic';
import { Container, Button, FormContainer } from './join_group_styles';
import Picker from './Picker';

export const JoinGroupForm = props => (
    <Container>
        <FormContainer>
            <Picker {...props} />
            <Button onPress={props.handleSubmit} disabled={!props.isValid}>
                <ButtonText>Join Group</ButtonText>
            </Button>
        </FormContainer>
    </Container>
);
