import React from 'react';
import { Container } from "native-base";
import LeaderboardTabs from '../components/LeaderboardTabs';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Leaderboard',
  };

  render() {
    return (
      <Container>
        <LeaderboardTabs />
      </Container>
    );
  }
}