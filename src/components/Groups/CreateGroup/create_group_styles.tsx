import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
`;

export const Button = styled.TouchableOpacity`
    background-color: #E6B43C;
    padding-vertical: 15;
    width: 90%;
    margin: 0 auto;
    margin-top: 20;
    border-radius: 100;
`;

export const CreateInput = styled.TextInput`
    border-bottom-width: ${props => (props.error ? '2px' : '2px')}
    border-bottom-color: ${props => (props.error ? 'tomato' : '#999999')}
    height: 40;
    padding-horizontal: 10;
    font-family: Avenir Next;
`;