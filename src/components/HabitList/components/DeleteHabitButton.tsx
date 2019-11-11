import React from 'react';
import _ from 'lodash';
import { compose } from 'react-apollo';
import { Animated } from 'react-native';
import { DeleteHabit } from '../../../data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RightActionButton, RightActionText } from '../habit_list_styles';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    async handlePress() {
        const habit_id = _.get(this.props.habit, 'habit_id', '');
        const deleteHabit = {
            variables: {
              item_id: habit_id
            }
          } 

        try {
            await this.props.mutate(deleteHabit);
            this.props.handleDeletion(habit_id);
            alert(`Successfully deleted the habit: ${this.props.habit.name}`)
        } catch (err) {
            console.error(err);
            this.props.handleDeletionError();
        }
    }

    render() {
        const { scale, error } = this.props;

        return (
            <RightActionButton onPress={this.handlePress}>
                <RightActionText> delete habit </RightActionText>
                <AnimatedIcon
                    name="delete-forever"
                    size={30}
                    color="#fff"
                    style={{ 
                        transform: [{ scale }],
                        width: 30,
                        marginHorizontal: 10,
                        alignSelf: 'center',
                        marginRight: 20,                  
                    }}
                />
                {error && alert('Error deleting habit.')}
            </RightActionButton>
        );
    }
}

export default compose(
    DeleteHabit
)(DeleteButton);