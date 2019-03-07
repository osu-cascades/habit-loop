import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { Formik } from 'formik';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';
import * as yup from 'yup'

import { CreateHabit } from '../../data';
import HabitForm from './HabitForm';

export class CreateHabitForm extends Component {
    submitNewHabit = async values => {
        const refetch = this.props.navigation.getParam('refetch', () => console.log('Couldn\'t find refetch function'));
        const newHabit = {
            variables: {
                input: {
                    name: values.name,
                    type: values.type,
                }
            }
        }
        
        // Wait for server to return result before refetching and going back
        try {
            await this.props.mutate(newHabit);

            // refetch then go back if the mutation was successful
            refetch();
            this.props.navigation.goBack();
        } catch (err) {
            // we can handle the state of an error here if submit fails
            console.log(err);
        }
        
    }

    render() {
        return (
            <Formik
                initialValues={{
                    name: '',
                    type: '',
                }}
                onSubmit={this.submitNewHabit}
                render={props => <HabitForm {...props}/>}
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
    CreateHabit,
)(CreateHabitForm)

