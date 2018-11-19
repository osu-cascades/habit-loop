import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Top25 from './Top25';
import Achievements from './Achievements';
import MostConsistent from './MostConsistent';
import { Text } from 'react-native';

export default class LeaderboardTabs extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Top 25">
            <Top25 />
          </Tab>
          <Tab heading="Achievements">
            <Achievements />
          </Tab>
          <Tab heading="Most consistent">
            <MostConsistent />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}