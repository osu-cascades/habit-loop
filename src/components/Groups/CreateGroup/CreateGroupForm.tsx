import React from 'react';
import { Button, ButtonText, Input } from '@src/components';
import styled from 'styled-components/native';

const Container = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
`;

export const CreateGroupForm = props => (
    <Container>
        <Input
            placeholder="Group Name"
            placeholderTextColor="#666"
            value={props.values.group_name}
            returnKeyType="next"
            onBlur={() => props.setFieldTouched('group_name')}
            onChangeText={props.handleChange('group_name')}
            onSubmitEditing={() => this.typeInput.focus()}
            error={props.touched.group_name && props.errors.group_name}
        />
        <Button onPress={props.handleSubmit} disabled={!props.isValid}>
            <ButtonText>CREATE</ButtonText>
        </Button>
    </Container>
);
