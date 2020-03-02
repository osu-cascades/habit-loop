import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import TopStreakList from './TopStreakList';
import GroupList from './GroupList';

export default class LeaderboardTabs extends Component {
  render() {
    return (
      <Tabs tabBarUnderlineStyle={{ backgroundColor: '#E6B43C' }}>
        <Tab heading="Top 25" tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000' }}>
          <TopStreakList />
        </Tab>
        <Tab heading="Groups" tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} activeTextStyle={{ color: '#000' }}>
          <GroupList />
        </Tab>
      </Tabs>
    );
  }
}

