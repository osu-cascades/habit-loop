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
    }

    componentDidMount() {
      if (!_.isEmpty(this.state.habits)) {
        this.setState({
          sectionedLists: [
              { title: 'Daily Habits', data: this.state.habits },
              { title: 'Weekly Habits', data: this.state.habits },
              { title: 'Completed Habits', data: this.state.habits}
          ]
        });
      } 
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.habits !== prevState.habits && !_.isEmpty(this.state.habits)) {
        this.setState({
          sectionedLists: [
            { title: 'Daily Habits', data: this.state.habits },
            { title: 'Weekly Habits', data: this.state.habits },
            { title: 'Completed Habits', data: this.state.habits}
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

    renderProps() {
      return Object.assign({
        error: this.state.error,
        navigate: this.props.navigate,
        refetch: this.props.refetch,
        data: this.props.data,
        handleDeletion: this.handleDeletion,
        handleDeletionError: this.handleDeletionError,
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
