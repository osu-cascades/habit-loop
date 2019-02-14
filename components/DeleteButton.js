import React from 'react';
import { DeleteHabit } from '../data';
import { compose } from 'react-apollo';

class DeleteButton extends React.Component {
    async handlePress = () => {
        const deleteHabit = {
            variables: {
              created_at: _.get(this.props.habit, 'created_at', ''),
              habit_id: _.get(this.props.habit, 'habit_id', ''),
            }
          } 

        try {
            await this.props.mutate(deleteHabit);

        } catch (err) {
            
        }
    }

    render() {
        return (
            <Button danger onPress={this.handlePress}>
                <Icon active name="trash" />
            </Button>
        );
    }
}

export default compose(
    DeleteHabit
)(DeleteButton);