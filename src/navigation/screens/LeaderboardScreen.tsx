import React from 'react';
import { Container } from 'native-base';
import LeaderboardTabs from '@src/components/LeaderboardTabs';

export const LeaderboardScreen = () => {
  return (
    <Container>
      <LeaderboardTabs />
    </Container>
  );
};
LeaderboardScreen.navigationOptions = {
  title: 'Leaderboard',
};
