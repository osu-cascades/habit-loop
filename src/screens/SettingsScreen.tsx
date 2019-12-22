import React from 'react';
import { SignoutButton } from '../components';
import { Container } from '../components/styling/SettingsScreenStyles';

export const SettingsScreen = () => {
  return (
    <Container>
      <SignoutButton />
    </Container>
  );
};

SettingsScreen.navigationOptions = {
  title: 'Settings',
};
