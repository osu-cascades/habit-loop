import React from 'react';
import _ from 'lodash';
import { compose } from 'react-apollo';
import { Button, Icon } from 'native-base';
import { DeleteHabit } from '../data';

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
        return (
            <Button danger onPress={this.handlePress}>
                <Icon active name="trash" />
                {this.props.error && alert('Could not delete habit!')}
            </Button>
        );
    }
}

export default compose(
    DeleteHabit
)(DeleteButton);