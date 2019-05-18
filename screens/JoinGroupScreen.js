import React from 'react';
import { JoinGroupForm } from '../components/Groups';


export default class JoinGroupScreen extends React.Component {
  static navigationOptions = {
    title: 'Join a group',
  };

  render() {
    return <JoinGroupForm />
  }
}