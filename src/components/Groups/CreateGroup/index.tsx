import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';
import * as yup from 'yup';

import { CreateGroup } from '@src/data';
import { CreateGroupForm } from './CreateGroupForm';

export class CreateGroupContainer extends Component {
    constructor() {
        super();
        this.state = {
            pressed: false,
        };
    }

    submitNewGroup = async values => {
        const refetch = this.props.navigation.getParam('refetch', () => console.log("Couldn't find refetch function"));
        const newGroup = {
            variables: {
                group_name: values.group_name,
            },
        };

        // Prevent duplicate habits
        if (!this.state.pressed) {
            this.setState({ pressed: true });
            // Wait for server to return result before refetching and going back
            try {
                await this.props.mutate(newGroup);

                refetch();
                this.props.navigation.goBack();
            } catch (err) {
                // we can handle the state of an error here if submit fails
                console.error(err);
            } finally {
                this.setState({ pressed: false });
            }
        }
    };

    render() {
        return (
            <Formik
                style={styles.newGroup}
                initialValues={{
                    group_name: '',
                }}
                onSubmit={this.submitNewGroup}
                render={props => <CreateGroupForm {...props} pressed={this.state.pressed} />}
                validationSchema={yup.object().shape({
                    group_name: yup.string().required(),
                })}
            />
        );
    }
}

const styles = StyleSheet.create({
    newGroup: {
        backgroundColor: '#ffffff',
    },
});

export default compose(
    withNavigation,
    CreateGroup
)(CreateGroupContainer);
