import React from 'react';
import { Button, ButtonText, Input } from '../basic';
import styled from 'styled-components/native';

const Container = styled.View`
    padding: 20px;
`;

export const HabitForm = props => (
    <Container>
        <Input
            placeholder="Name" 
            placeholderTextColor='#666'
            value={props.values.name}
            onBlur={() => props.setFieldTouched('name')}
            onChangeText={props.handleChange('name')}
        />
        {props.touched.name && props.errors.name && <Text>Name needs a value.</Text>}
        <Input
            placeholder="Type"
            onChangeText={props.handleChange('type')}
        />
        <Button
            onPress={props.handleSubmit}
            disabled={!props.isValid}
        >
            <ButtonText>
                Create New Habit
            </ButtonText>
        </Button>
    </Container>
);