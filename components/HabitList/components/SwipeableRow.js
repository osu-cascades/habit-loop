import React from 'react';
import { GestureHandler } from 'expo';
import DeleteHabitButton from './DeleteHabitButton';
import CompleteHabitButton from './CompleteHabit';


const { 
  Swipeable,
} = GestureHandler;

class SwipeableRow extends React.Component {
    constructor() {
        super();

        this.renderLeftActions = this.renderLeftActions.bind(this);
        this.renderRightActions = this.renderRightActions.bind(this);
    }

    renderLeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
          inputRange: [0, 80],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });
  
        return (
          <CompleteHabitButton
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
                onSwipeableLeftOpen={() => alert('completed')}
            >        
                {this.props.children}
            </Swipeable>
        );
    }
}

export default SwipeableRow;