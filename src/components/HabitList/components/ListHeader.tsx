import React from 'react';
import { Header, HeaderText } from '../habit_list_styles';

export default ({ text }) => (
  <Header>
    <HeaderText>{text}</HeaderText>
  </Header>
);
