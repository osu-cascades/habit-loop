import React from 'react';
import _ from 'lodash';
import { compose } from 'react-apollo';
import { Animated, StyleSheet } from 'react-native';
import { DeleteHabit } from '../../data';
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
  margin-right: 50px
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
            alert(`Successfully deleted the habit ${habit_id}`)
        } catch (err) {
            console.log(err);
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
                    style={[styles.actionIcon, { transform: [{ scale }] }]}
                />
                {error && alert('Error deleting habit.')}
            </RightActionButton>
        );
    }
}
const styles = StyleSheet.create({

actionIcon: {
    width: 30,
    marginHorizontal: 10,
    alignSelf: 'center',
  }
});

export default compose(
    DeleteHabit
)(DeleteButton);