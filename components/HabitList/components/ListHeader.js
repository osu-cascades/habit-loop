import React from 'react';
import styled from 'styled-components/native'

const Header = styled.View`
    height: 50px;
    width: 100%;
    background-color: #F1F1F1;
`;

const HeaderText = styled.Text`
    font-family: Avenir Next;
    font-size: 20px;
    align-self: center;
    font-weight: bold;
    margin-top: 12px;
`;

export default class ListHeader extends React.Component {
    render() {
        return (
            <Header>
                <HeaderText>
                    {this.props.text}
                </HeaderText>
            </Header>
        )
    }
}