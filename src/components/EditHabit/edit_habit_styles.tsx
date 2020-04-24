import styled from 'styled-components/native';

export const ContainerContent = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
    height: 100%;
`;

export const Container = styled.KeyboardAvoidingView`
    background-color: #ffffff;
    height: 100%;
`;

export const UpdateButton = styled.TouchableOpacity`
  background-color: #E6B43C;
  padding-vertical: 15;
  width: 95%;
  margin: 0 auto;
  margin-top: 10;
  border-radius: 100;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 15;
`;

export const TitleContainer = styled.View`
  border-bottom-width: 4;
  borderColor: #E6B43C;
  borderStyle: solid;
  padding: 13px;
`;