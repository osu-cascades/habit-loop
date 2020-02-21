import styled from 'styled-components/native';

export const SignupContainer = styled.KeyboardAvoidingView`
    padding: 20px;
    flex: 1;
    justify-content: center;
    background-color: #FFF;
`;

export const SignupText = styled.Text`
text-align: center;
align-self: center;
font-weight: bold;
font-size: 16px;
    font-family: Avenir Next;
`;

export const SignupView = styled.View`
    padding: 20px;
    background-color: #FFFFFF;
`;

export const SectionStyle = styled.View`
    height: 40;
    margin: 10px;
    flex-direction: row;
    justifyContent: center;
    align-items: center;
    border-bottom-width: ${props => (props.error ? '2px' : '2px')}
    border-bottom-color: ${props => (props.error ? 'tomato' : '#999999')}
`;

export const IconForm = styled.Image`
    height: 100;
    width: 15;
    resize-mode: contain;
    align-items: center;
`;

export const SignupInput = styled.TextInput`
    flex: 1;
    height: 40;
    padding-horizontal: 10;
    font-family: Avenir Next;
`;

export const Button = styled.TouchableOpacity`
    padding-vertical: 15;
    width: 335;
    margin: 0 auto;
    border: 3px solid #E6B43C;
    border-radius: 100;
`;

export const ButtonText = styled.Text`
    text-align: center;
    font-family: Avenir Next;
    color: #E6B43C;
    font-weight: 700;
`;

export const SButton = styled.TouchableOpacity`
    background-color: #E6B43C;
    padding-vertical: 15;
    width: 335;
    margin: 0 auto;
    border-radius: 100;
`;