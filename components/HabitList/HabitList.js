import React from 'react';
import { FlatList } from 'react-native';
import { SwipeRow, Button, Icon } from "native-base";
import DeleteHabitButton from './DeleteHabitButton';
import HabitCard from './HabitCard';

class HabitList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            habits: this.props.habits,
            error: false,
        }

        this.handleDeletionError = this.handleDeletionError.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
    }

    handleDeletionError() {
        this.setState({ error: true });
    }

    handleDeletion(habit_id) {
        this.setState({
            habits: this.state.habits.filter(habit => habit_id !== habit.habit_id),
        })
    }

    render() {
        return (
            <FlatList 
              data={this.state.habits}
              renderItem={({ item }) => (
                <SwipeRow
                  leftOpenValue={75}
                  rightOpenValue={-75}
                  left={
                    <Button success onPress={() => alert('Add')}>
                      <Icon active name="add" />
                    </Button>
                  }
                  body={
                    <HabitCard 
                      habit={item} 
                      navigate={this.props.navigate} 
                      refetch={this.props.refetch}
                    />
                  }
                  right={
                    <DeleteHabitButton 
                      habit={item}
                      error={this.state.error}
                      handleDeletion={this.handleDeletion}
                      handleDeletionError={this.handleDeletionError}
                    />}
                />
              )}

              onRefresh={() => this.props.data.refetch()}
              refreshing={this.props.data.networkStatus === 4}
            />
        )
    }
}

export default HabitList;
