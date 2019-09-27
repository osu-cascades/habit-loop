import React from 'react';
import * as GestureHandler from 'react-native-gesture-handler';
import DeleteHabitButton from './DeleteHabitButton';
import CompleteHabitButton from './CompleteHabit';


const { 
  Swipeable,
} = GestureHandler;

class SwipeableRow extends React.Component {
    handleSubmit = () => {
        this.props.handleCompletion(this.props.item.habit_id);
    }

    renderLeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
          inputRange: [0, 80],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });
  
        return (
          <CompleteHabitButton
            habit={this.props.item}
            error={this.props.error}
            handleCompletion={this.props.handleCompletion}
            scale={scale}
          />
        );
    };
  
    renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-80, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        
        return (
            <DeleteHabitButton 
                habit={this.props.item}
                scale={scale}
                error={this.props.error}
                handleDeletion={this.props.handleDeletion}
                handleDeletionError={this.props.handleDeletionError}
            />
        );
    }

    render() {
        return (
            <Swipeable
                renderLeftActions={this.renderLeftActions}
                renderRightActions={this.renderRightActions}
                friction={2}
                leftThreshold={80}
                rightThreshold={40}
                // onSwipeableLeftOpen={this.handleSubmit}
            >        
                {this.props.children}
            </Swipeable>
        );
    }
}

export default SwipeableRow;