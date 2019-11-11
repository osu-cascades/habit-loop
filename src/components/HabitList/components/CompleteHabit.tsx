import React from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LeftAction, LeftActionText } from '../habit_list_styles';
import { compose } from 'react-apollo';
import _ from 'lodash';
import { CompleteHabit } from '@src/data';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export class CompleteHabitButton extends React.Component {
  constructor(props) {
    super(props);

    this.submitCompletion = this.submitCompletion.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
  }

  handleCompletion() {
    this.props.handleCompletion(this.props.habit.habit_id);
    this.submitCompletion();
  }

  async submitCompletion() {
    const completeHabit = {
      variables: {
        item_id: _.get(this.props.habit, 'habit_id', ''),
        recurrence: _.get(this.props.habit, 'recurrence', ''),
      },
    };

    try {
      await this.props.mutate(completeHabit);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { scale } = this.props;

    return (
      <LeftAction onPress={this.handleCompletion}>
        <AnimatedIcon
          name="archive"
          size={30}
          color="#fff"
          style={{
            transform: [{ scale }],
            width: 30,
            marginHorizontal: 10,
            alignSelf: 'center',
            marginLeft: 20,
          }}
        />
        <LeftActionText>complete habit</LeftActionText>
      </LeftAction>
    );
  }
}

export default compose(CompleteHabit)(CompleteHabitButton);
