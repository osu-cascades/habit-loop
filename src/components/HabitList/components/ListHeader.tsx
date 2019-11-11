import React from 'react';
import { Header, HeaderText } from '../habit_list_styles'

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