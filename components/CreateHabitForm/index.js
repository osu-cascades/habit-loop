import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';
import * as yup from 'yup'

import { CreateHabit } from '../../data';
import HabitForm from './HabitForm';

export class CreateHabitForm extends Component {
    constructor() {
        super();
        this.state = {
            pressed: false,
        }
    }
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

        // Prevent duplicate habits
        if (!this.state.pressed){
            this.setState({ pressed: true })
            // Wait for server to return result before refetching and going back
            try {
                await this.props.mutate(newHabit);

                // refetch then go back if the mutation was successful
                // for future reference we don't even need to refetch
                // it could just update in the app itself without making any requests
                // since we know it is successful at this point.
                refetch();
                this.props.navigation.goBack();
            } catch (err) {
                // we can handle the state of an error here if submit fails
                this.setState({ pressed: false })
                console.log(err);
            }
        }
    }

    render() {
        return (
            <Formik
                style={styles.addHabitForm}
                initialValues={{
                    name: '',
                    type: '',
                }}
                onSubmit={this.submitNewHabit}
                render={props => <HabitForm {...props} pressed={this.state.pressed}/>}
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

const styles = StyleSheet.create({
    addHabitForm: {
        backgroundColor: '#ffffff'
    }
})

export default compose(
    withNavigation,
    CreateHabit,
)(CreateHabitForm)

