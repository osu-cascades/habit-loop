import React from 'react';
import _ from 'lodash';
import { compose } from 'react-apollo';
import { Animated } from 'react-native';
import { DeleteHabit } from '../../../data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const RightActionButton = styled.TouchableOpacity`
    flex-direction: row;
    flex: 1;
    background-color: #dd2c00;
    justify-content: flex-end;
`;

const RightActionText = styled.Text`
    align-self: center;
    font-size: 35px;
    font-family: Avenir Next;
    color: white;
    margin-right: 45px
`;

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    async handlePress() {
        const created_at = _.get(this.props.habit, 'created_at', '');
        const habit_id = _.get(this.props.habit, 'habit_id', '');

        const deleteHabit = {
            variables: {
              created_at,
              habit_id
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