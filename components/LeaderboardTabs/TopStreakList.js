import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { 
  GetTopStreaks,
 } from '../../data';
import {
  renderForError,
  renderWhileLoading
} from '../basic';
import { TopStreakBoard } from './Board'

const TopStreakList = props => {
  const items = props.data.getTopStreaks
    .map((item, key) => Object.assign(item, { key: key.toString() }));

  return (
    <TopStreakBoard 
        items={items}
        networkStatus={props.data.networkStatus}
        refetch={props.data.refetch}
    />
  )
}

export default compose(
  GetTopStreaks,
  renderForError(),
  renderWhileLoading(),
)(TopStreakList)