import React from 'react';
import { SectionList } from 'react-native';
import HabitCard from './HabitCard';
import { Separator } from '../../basic';
import SwipeableRow from './SwipeableRow';
import Header from './ListHeader';

class HabitList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            habits: props.habits,
            error: false,
        }

        this.handleDeletionError = this.handleDeletionError.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
        this.renderProps = this.renderProps.bind(this);
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
        data: this.props.data 
      })
    }

    render() {
        return (
          <SectionList 
            data={this.state.habits}
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
            sections={[
                { title: 'Daily Habits', data: this.state.habits },
                { title: 'Weekly Habits', data: this.state.habits },
                { title: 'Completed Habits', data: this.state.habits}
            ]}
            keyExtractor={(item, index) => item.habit_id}
            ItemSeparatorComponent={() => <Separator />}
            renderSectionHeader={({ section: { title }}) => (
                <Header text={title} />
            )}
            onRefresh={this.props.data.refetch}
            refreshing={this.props.data.networkStatus === 4}
          />
        )
    }
}

export default HabitList;
