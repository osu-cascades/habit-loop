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

// export const SignupInput = styled.TextInput`
//     height: 40;
//     background-color: #E9E9E9;
//     margin-bottom: 10;
//     padding-horizontal: 10;
//     font-family: Avenir Next;
//     border: ${props => (props.error ? '1px solid tomato' : '1px solid #999999')}
//     border-radius: 4px;
// `;

export const SignupInput = styled.TextInput`
    height: 40;
    margin-bottom: 10;
    padding-horizontal: 10;
    font-family: Avenir Next;
    border: ${props => (props.error ? '1px solid tomato' : '1px solid #999999')}
    border-radius: 4px;
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