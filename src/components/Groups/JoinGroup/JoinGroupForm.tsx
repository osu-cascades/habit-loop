import React from 'react';
import { ButtonText } from '../../basic';
import { Container, Button } from './join_group_styles';
import Picker from './Picker';

export const JoinGroupForm = props => (
    <Container>
        <Picker {...props} />
        <Button onPress={props.handleSubmit} disabled={!props.isValid}>
            <ButtonText>JOIN</ButtonText>
        </Button>
    </Container>
);
