import React from 'react';
import { Button, ButtonText, Input } from '../basic';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const Container = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
`;

export default HabitForm = props => (
    <Container >
        <Input
            placeholder="Name" 
            placeholderTextColor='#666'
            value={props.values.name}
            returnKeyType='next'
            onBlur={() => props.setFieldTouched('name')}
            onChangeText={props.handleChange('name')}
            onSubmitEditing={() => this.typeInput.focus()}
            error={props.touched.name && props.errors.name}
        />
        <Input
            placeholder="Type"
            placeholderTextColor='#666'
            value={props.values.type}
            returnKeyType="go"
            onBlur={() => props.setFieldTouched('type')}
            onChangeText={props.handleChange('type')}
            ref={input => this.typeInput = input}
            error={props.touched.type && props.errors.type}
        />
        <Button
            style={styles.addBtn}
            onPress={props.handleSubmit}
            disabled={!props.isValid}
        >
            <ButtonText>
                Create New Habit
            </ButtonText>
        </Button>
    </Container>
);

const styles = StyleSheet.create({
    addBtn: {
        backgroundColor: '#F78E2A'
    }
})
