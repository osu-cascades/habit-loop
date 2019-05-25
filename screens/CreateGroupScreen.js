import React from 'react';
import { CreateGroup } from '../components/Groups';


export default class CreateGroupScreen extends React.Component {
  static navigationOptions = {
    title: 'Create a new group',
  };

  render() {
    return (
      <CreateGroup />
    );
  }
}