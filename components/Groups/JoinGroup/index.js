import React, { Component } from 'react';
import { compose } from 'react-apollo';
import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';
import * as yup from 'yup';

import { JoinGroup } from '../../../data';
import JoinGroupForm from './JoinGroupForm';

export class JoinGroupContainer extends Component {
    constructor() {
        super();
        this.state = {
            pressed: false,
        }
    }

    submitJoinGroup = async values => {
        const refetch = this.props.navigation.getParam('refetch', () => console.log('Couldn\'t find refetch function'));
        const joinGroup = {
            variables: {
                item_id: values.groups
            }
        }

        // Prevent duplicate habits
        if (!this.state.pressed){
            this.setState({ pressed: true })
            // Wait for server to return result before refetching and going back
            try {
                await this.props.mutate(joinGroup);

                refetch();
                this.props.navigation.goBack();
            } catch (err) {
                // we can handle the state of an error here if submit fails
                console.log(err);
            } finally {
                this.setState({ pressed: false })
            }
        }
    }

    render() {
        return (
            <Formik
                style={styles.addJoinGroupForm}
                initialValues={{
                    groups: '',
                }}
                onSubmit={this.submitJoinGroup}
                render={props => <JoinGroupForm {...props} pressed={this.state.pressed}/>}
                validationSchema={
                    yup.object().shape({
                        groups: yup
                            .string()
                            .required()
                    })
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    addJoinGroupForm: {
        backgroundColor: '#ffffff'
    }
});

export default compose(
    withNavigation,
    JoinGroup,
)(JoinGroupContainer);
