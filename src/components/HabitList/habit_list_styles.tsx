import styled from 'styled-components/native';

export const LeftAction = styled.TouchableOpacity`
    flex-direction: row;
    flex: 1;
    background-color: #388e3c;
    justify-content: flex-start;
`;

export const LeftActionText = styled.Text`
    align-self: center;
    font-size: 35px;
    font-family: Avenir Next;
    color: white;
    margin-left: 40px;
`;

export const RightActionButton = styled.TouchableOpacity`
    flex-direction: row;
    flex: 1;
    background-color: #dd2c00;
    justify-content: flex-end;
`;

export const RightActionText = styled.Text`
    align-self: center;
    font-size: 35px;
    font-family: Avenir Next;
    color: white;
    margin-right: 45px
`;

export const EmptyText = styled.Text`
    font-family: Avenir Next;
    font-size: 20px;
    align-self: center;
    font-weight: bold;
    margin-top: 12px;
`;

export const Header = styled.View`
    height: 50px;
    width: 100%;
    background-color: #F1F1F1;
`;

export const HeaderText = styled.Text`
    font-family: Avenir Next;
    font-size: 20px;
    align-self: center;
    font-weight: bold;
    margin-top: 12px;
`;
