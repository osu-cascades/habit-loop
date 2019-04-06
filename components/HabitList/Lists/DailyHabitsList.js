import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import styled from 'styled-components/native';
import HabitCard from '../HabitCard';

import SwipeableRow from '../SwipeableRow';

const Separator = styled.View`
  background-color: rgb(200, 199, 204);
  height: ${StyleSheet.hairlineWidth};
`;

class DailyHabitsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            habits: props.habits,
        };

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
            error: this.props.error,
            navigate: this.props.navigate,
            refetch: this.props.refetch,
            handleDeletionError: this.handleDeletionError,
            handleDeletion: this.handleDeletion,
        })
    }

    render() {
        return(
            <FlatList 
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
                keyExtractor={(item, index) => item.habit_id}
                ItemSeparatorComponent={() => <Separator />}
                onRefresh={this.props.data.refetch}
                refreshing={this.props.data.networkStatus === 4}
            />
        );
    }
}

export default DailyHabitsList;