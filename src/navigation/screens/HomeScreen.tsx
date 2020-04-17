import React from 'react';
import { Container } from 'native-base';
import Constants from 'expo-constants';
import { PushNotifications, SignoutButton, PriorityHabit, StreakImage } from '@src/components';
import { CreateGroupButton, JoinGroupButton } from '@src/components/Groups';
import Groups from '../../components/LeaderboardTabs';
import { ButtonContainer, HomeContainer } from '../../components/styling/HomeStyles';

export const HomeScreen = () => {
  return (
    <HomeContainer>
      <StreakImage />
      <ButtonContainer>
        <CreateGroupButton />
        <JoinGroupButton />
      </ButtonContainer>
      <Groups />
      {/* <PriorityHabit /> */}
      <PushNotifications />
    </HomeContainer>
  );
};
