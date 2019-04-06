import React from 'react';
import { Animated, StyleSheet, View, FlatList } from 'react-native';
import { GestureHandler } from 'expo';
import DeleteHabitButton from './DeleteHabitButton';
import HabitCard from './HabitCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const LeftAction = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  background-color: #388e3c;
  justify-content: flex-start;
`;

const LeftActionText = styled.Text`
  align-self: center;
  font-size: 35px;
  font-family: Avenir Next;
  color: white;
  margin-left: 45px;
`;

const { 
  Swipeable,
} = GestureHandler;

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class HabitList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            habits: this.props.habits,
            error: false,
        }

        this.handleDeletionError = this.handleDeletionError.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
        this.SwipeableRow = this.SwipeableRow.bind(this);
    }

    handleDeletionError() {
        this.setState({ error: true });
    }

    handleDeletion(habit_id) {
        this.setState({
            habits: this.state.habits.filter(habit => habit_id !== habit.habit_id),
        })
    }

    renderLeftActions = (progress, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [0, 80],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      });
      return (
        <LeftAction onPress={this.close}>
          <AnimatedIcon
            name="archive"
            size={30}
            color="#fff"
            style={[styles.actionIcon, { transform: [{ scale }] }]}
          />
          <LeftActionText>complete habit</LeftActionText>
        </LeftAction>
      );
    };

    renderRightActions = (item) => (progress, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [-80, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      });
      
      return (
        <DeleteHabitButton 
          habit={item}
          scale={scale}
          error={this.state.error}
          handleDeletion={this.handleDeletion}
          handleDeletionError={this.handleDeletionError}
        />
      );
    }

    SwipeableRow = (item, index) => (
      <Swipeable
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions(item)}
        friction={2}
        leftThreshold={80}
        rightThreshold={40}
        onSwipeableLeftOpen={() => alert('completed')}
      >        
          <HabitCard 
            habit={item} 
            navigate={this.props.navigate} 
            refetch={this.props.refetch}
          /> 
      </Swipeable>
    );

    render() {
        return (
            <FlatList 
              data={this.state.habits}
              renderItem={({ item, index }) => this.SwipeableRow(item, index)}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              onRefresh={() => this.props.data.refetch()}
              refreshing={this.props.data.networkStatus === 4}
            />
        )
    }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
});


export default HabitList;
