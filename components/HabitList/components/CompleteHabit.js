import React from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import { compose } from 'react-apollo';
import _ from 'lodash';
import { CompleteHabit } from '../../../data';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

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
  margin-left: 40px;
`;

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
                habit_id: _.get(this.props.habit, 'habit_id', ''),
                recurrence: _.get(this.props.habit, 'recurrence', ''),
            }
        }

        try {
            await this.props.mutate(completeHabit);
        } catch (err) {
            console.log(err);
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

export default compose(
    CompleteHabit
)(CompleteHabitButton);