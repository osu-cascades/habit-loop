import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { StyleSheet } from 'react-native';
import LeaderboardList from './LeaderboardList';

export default class LeaderboardTabs extends Component {
  render() {
    return (
        <Tabs>
          <Tab heading="Top 25">
            <LeaderboardList type="top25"/>
          </Tab>
          <Tab heading="Achievements">
            <LeaderboardList type="achievements" />
          </Tab>
          <Tab heading="Most Consistent">
            <LeaderboardList type="consistent" />
          </Tab>
        </Tabs>
    );
  }
}