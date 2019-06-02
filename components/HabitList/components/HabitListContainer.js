import React from "react";
import _ from 'lodash';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { GetHabits } from '../../../data';
import HabitList from './HabitList';
import {
  renderWhileLoading,
  renderForError,
} from '../../basic';

class HabitListContainerClass extends React.Component {
    componentDidMount() {
        this.props.updateHabits(this.props.data.refetch);
    }

    render() {
        const props = this.props;
        const habits = props.data.getHabits.map(item => ({
            name: item.habit_name,
            created_at: item.created_at,
            habit_id: item.item_id,
            key: item.item_id,
            type: item.type,
            completed_today: item.completed_today || false,
            recurrence: item.recurrence,
            user_id: item.user_id,
          }));
        
          return (
            <HabitList 
                habits={habits}
                data={props.data}
                navigate={props.navigation.navigate}
                refetch={() => props.data.refetch()}
            />
          );
    }
}

export default compose(
  withNavigation,
  GetHabits,
  renderWhileLoading(),
  renderForError(),
)(HabitListContainerClass);