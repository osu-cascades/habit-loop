import React from 'react';
import _ from 'lodash';
import HabitCard from './HabitCard';
import EmptyText from './EmptyText';
import { SectionList, Text } from 'react-native';
import { Separator } from '../../basic';
import SwipeableRow from './SwipeableRow';
import Header from './ListHeader';

class HabitList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            habits: props.habits,
            sectionedLists: [],
            error: false,
        }

        this.handleDeletionError = this.handleDeletionError.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
        this.renderProps = this.renderProps.bind(this);
        this.handleCompletion = this.handleCompletion.bind(this);
    }

    componentDidMount() {
      if (!_.isEmpty(this.state.habits)) {
        this.setState({
          sectionedLists: [
              { title: 'Daily Habits', data: this.state.habits.filter(habit => habit.completed_today === false && habit.recurrence === 'DAILY') },
              { title: 'Weekly Habits', data: this.state.habits.filter(habit => habit.completed_today === false && habit.recurrence === 'WEEKLY') },
              { title: 'Completed Habits', data: this.state.habits.filter(habit => habit.completed_today === true) }
          ]
        });
      } 
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.habits !== prevState.habits && !_.isEmpty(this.state.habits)) {
        this.setState({
          sectionedLists: [
            { title: 'Daily Habits', data: this.state.habits.filter(habit => habit.completed_today === false && habit.recurrence === 'DAILY') },
            { title: 'Weekly Habits', data: this.state.habits.filter(habit => habit.completed_today === false && habit.recurrence === 'WEEKLY') },
            { title: 'Completed Habits', data: this.state.habits.filter(habit => habit.completed_today === true) }
          ]
        })
      } else if (this.state.habits !== prevState.habits && _.isEmpty(this.state.habits)) {
        this.setState({
          sectionedLists: []
        })
      }
    }

    handleDeletionError() {
      this.setState({ error: true });
    }

    handleDeletion(habit_id) {
        this.setState({
            habits: this.state.habits.filter(habit => habit_id !== habit.habit_id),
        });
    }

    handleCompletion(habit_id) {
      const completeHabit = this.state.habits.map(habit => {
        if (habit_id === habit.habit_id) {
          return Object.assign(habit, { completed_today: true });
        } return habit;

      });
      this.setState({
        habits: completeHabit
      });
    }

    renderProps() {
      return Object.assign({
        error: this.state.error,
        navigate: this.props.navigate,
        refetch: this.props.refetch,
        data: this.props.data,
        handleDeletion: this.handleDeletion,
        handleDeletionError: this.handleDeletionError,
        handleCompletion: this.handleCompletion,
      })
    }

    render() {
        return (
          <SectionList 
            data={this.state.sectionedLists}
            renderItem={({ item }) => (
                <SwipeableRow 
                    item={item}
                    {...this.renderProps()}
                >
                    <HabitCard 
                        habit={item}
                        navigate={this.props.navigate}
                        refetch={this.props.refetch}
                    />
                </SwipeableRow>
            )}
            sections={this.state.sectionedLists}
            keyExtractor={(item, index) => item.habit_id}
            ItemSeparatorComponent={() => <Separator />}
            renderSectionHeader={({ section: { title }}) => (
                <Header text={title} />
            )}
            ListEmptyComponent={<EmptyText />}
            onRefresh={this.props.data.refetch}
            refreshing={this.props.data.networkStatus === 4}
          />
        )
    }
}

export default HabitList;
