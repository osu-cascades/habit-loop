import React from "react";
import { Text } from "native-base";
import _ from 'lodash';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { GetHabits } from '../../data';
import HabitListContainer from './components/HabitListContainer';

import { 
  CreateHabitFAB,
} from '../';
import {
  renderWhileLoading,
  renderForError,
} from '../basic';

const HabitList = props => {
  return (
      <>
        <HabitListContainer />
        <CreateHabitFAB refetch={() => props.data.refetch()}/>
      </>
  );
}

export default HabitList;
