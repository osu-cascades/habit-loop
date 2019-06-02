import React, { Component } from "react";
import { Text } from "react-native";
import _ from 'lodash';
import { compose } from 'react-apollo';

import { GetUserStreak } from '../data';
import {
  renderWhileLoading,
  renderForError,
} from './basic';

const Streak = props => (
  <Text>
    {`Your current streak is ${props.data.getUserStreak.score || 0}`}
  </Text>
);

export default compose(
  GetUserStreak,
  renderWhileLoading(),
  renderForError(),
)(Streak);