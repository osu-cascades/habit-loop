import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { Formik } from 'formik';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';
import * as yup from 'yup'

import { UpdateHabit } from '../../data';
import EditHabitForm from './EditHabitForm';

// Class to update habit details such as name, description, 
// etc.
class EditHabit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            networkError: false,
        }

        this.submitUpdatedHabit = this.submitUpdatedHabit.bind(this);
    }

    async submitUpdatedHabit(values) {
        const updatedHabit = {
            variables: {
                input: {
                    habit_name: values.name,
                    type: values.type,
                    created_at: this.props.habit.created_at,
                    item_id: this.props.habit.habit_id,
                    user_id: this.props.habit.user_id,
                    recurrence: values.recurrence,
                }
            }
        }

        try {
            await this.props.mutate(updatedHabit);
            const refetch = this.props.navigation.getParam('refetch', () => console.log('Couldn\'t find refetch function'));

            refetch();
            this.props.navigation.goBack();
        } catch (err) {
            console.log(err);
            this.setState({ networkError: true });
        }
    }

    render() {
        return (
            <Formik
                initialValues={{
                    name: this.props.habit.name,
                    type: this.props.habit.type,
                    recurrence: this.props.habit.recurrence,
                }}
                onSubmit={this.submitUpdatedHabit}
                render={props => <EditHabitForm {...props}/>}
                validationSchema={
                    yup.object().shape({
                        name: yup
                            .string()
                            .required(),
                        type: yup
                            .string()
                            .required(),
                    })
                }
            />
        );
    }
}

export default compose(
    withNavigation,
    UpdateHabit,
)(EditHabit)