import styled from 'styled-components/native';

export const LoginButton = styled.TouchableOpacity`
  background-color: #E6B43C;
  padding-vertical: 15;
  width: 95%;
  margin: 0 auto;
  margin-top: 10;
  border-radius: 100;
`;

export const LoginView = styled.View`
  padding: 20px;
  background-color: #FFFFFF;
`;

export const TitleText = styled.Text`
  text-align: center;
  align-self: center;
  font-weight: bold;
  font-size: 16px;
  font-family: Avenir Next;
`;

export const LoginInput = styled.TextInput`
  flex: 1;
  height: 40;
  padding-horizontal: 10;
  font-family: Avenir Next;
`;

export const IconForm = styled.Image`
  height: 100;
  width: 15;
  resize-mode: contain;
  align-items: center;
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