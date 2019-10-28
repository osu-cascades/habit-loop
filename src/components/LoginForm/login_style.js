import styled from 'styled-components/native'

export const LoginButton = styled.TouchableOpacity`
    background-color: #666;
    padding-vertical: 10;
    width: 200;
    margin: 0 auto;
    margin-top: 10;
    border-radius: 5;
`;

export const LoginView = styled.View`
    padding: 20px;
    border-radius: 5;
    background-color: #E6B43C;
`;

export const LoginInput = styled.TextInput`
    height: 40;
    background-color: #E9E9E9;
    margin-bottom: 10;
    padding-horizontal: 10;
    font-family: Avenir Next;
    border: ${props => (props.error ? '1px solid tomato' : '1px solid #999999')}
    border-radius: 4px;
`;