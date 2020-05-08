import React from 'react';
import { Container } from 'native-base';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native'
import { PushNotifications, SignoutButton, PriorityHabit, StreakImage } from '@src/components';
import { CreateGroupButton, JoinGroupButton } from '@src/components/Groups';
import Groups from '../../components/LeaderboardTabs';
import { ButtonContainer, Ccontainer, HomeContainer } from '../../components/styling/HomeStyles';

export const HomeScreen = () => {
  return (
    <HomeContainer>
      <ScrollView>
        <StreakImage />
        <ButtonContainer>
          <CreateGroupButton />
          <JoinGroupButton />
        </ButtonContainer>
        <Ccontainer>
          <Groups />
        </Ccontainer>
        {/* <PriorityHabit /> */}
        <PushNotifications />
      </ScrollView>
    </HomeContainer>
  );
};