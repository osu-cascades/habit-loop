import React from 'react';
import { JoinGroup } from '../components/Groups';


export default class JoinGroupScreen extends React.Component {
  static navigationOptions = {
    title: 'Join a group',
  };

  render() {
    return <JoinGroup />
  }
}