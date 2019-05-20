import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import TopStreakList  from './TopStreakList';
import GroupList from './GroupList';

export default class LeaderboardTabs extends Component {
  render() {
    return (
        <Tabs>
          <Tab heading="Top 25">
            <TopStreakList />
          </Tab>
          <Tab heading="Groups">
            <GroupList />
          </Tab>
        </Tabs>
    );
  }
}

