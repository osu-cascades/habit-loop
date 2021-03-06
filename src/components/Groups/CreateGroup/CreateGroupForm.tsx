import React from 'react';
import { ButtonText, Input } from '@src/components';
import { Container, Button, CreateInput, FormContainer } from './create_group_styles';

export const CreateGroupForm = props => (
    <Container>
        <FormContainer>
            <CreateInput
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
                <ButtonText>Create Group</ButtonText>
            </Button>
        </FormContainer>
    </Container>
);

