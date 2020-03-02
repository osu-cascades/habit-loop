import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import TopStreakList from './TopStreakList';
import GroupList from './GroupList';

export default class LeaderboardTabs extends Component {
  render() {
    return (
      <Tabs tabBarUnderlineStyle={{ backgroundColor: '#E6B43C' }}>
        <Tab heading="Top 25" activeTextStyle={{ color: '#000' }}>
          <TopStreakList />
        </Tab>
        <Tab heading="Groups" activeTextStyle={{ color: '#000' }}>
          <GroupList />
        </Tab>
      </Tabs>
    );
  }
}

