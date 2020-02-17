import styled from 'styled-components/native';

export const LoginButton = styled.TouchableOpacity`
    background-color: #E6B43C;
    padding-vertical: 15;
    width: 335;
    margin: 0 auto;
    margin-top: 10;
    border-radius: 100;
`;

export const LoginView = styled.View`
    padding: 20px;
    border-radius: 5;
    background-color: #FFFFFF;
`;

export const LoginInput = styled.TextInput`
    height: 40;
    margin-bottom: 25;
    padding-horizontal: 10;
    font-family: Avenir Next;
    border-bottom-width: ${props => (props.error ? '2px' : '2px')}
    border-bottom-color: ${props => (props.error ? 'tomato' : '#999999')}
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  background-color: #FFFFFF;
`;

export const InvalidLoginText = styled.Text`
  text-align: center;
  color: #FFF;
  opacity: 0.8;
  font-weight: bold;
`;