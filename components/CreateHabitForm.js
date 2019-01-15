import React, { Component } from 'react';
import { Container, Form, Item, Input, Button, Picker } from 'native-base';
import {
    Text,
} from 'react-native';
import { compose } from 'react-apollo';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import { Formik } from 'formik';
import { withNavigation } from 'react-navigation';
import { CreateHabit } from '../data/';
import * as yup from 'yup'
const types = [
    {
        id: 1,
        name: "React.js"
    },
    {
        id: 2,
        name: "Graphql"
    },
    {
        id: 3,
        name: "Apollo"
    },
    {
        id: 4,
        name: "Node.js"
    }
]

const HabitForm = props => (
    <Container>
        <Form>
            <Item>
                <Input
                    placeholder="Name" 
                    value={props.values.name}
                    onBlur={() => props.setFieldTouched('name')}
                    onChangeText={props.handleChange('name')}
                />
                {props.touched.name && props.errors.name && <Text>WTF BRO</Text>}
            </Item>
            <Item picker>
                <Picker
                    mode="dropdown"
                    style={{ width: undefined }}
                    placeholder="Type"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={props.values.type}
                    onValueChange={props.handleChange('type')}
                >
                    {types.map(type => <Picker.Item label={type.name} value={type.name} key={type.id} />)}
                </Picker>
            </Item>
            <Button
                warning
                block
                onPress={props.handleSubmit}
                disabled={!props.isValid}
            >
                <Text>
                    Create New Habit
                </Text>
            </Button>
        </Form>
    </Container>
)

export class CreateHabitForm extends Component {
    submitNewHabit = async (values) => {
        const refetch = this.props.navigation.getParam('refetch', () => console.log('Couldn\'t find refetch function'));
        const newHabit = {
            variables: {
                user_id: values.user_id,
                input: {
                    habit_id: uuidv4(),
                    created_at: new Date(),
                    name: values.name,
                    type: values.type,
                }
            }
        }
        
        // Wait for server to return result before refetching and going back
        try {
            await this.props.mutate(newHabit);

            // refetch then go back only if the mutation was successful
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
                    user_id: '321',
                    name: '',
                    type: [],
                }}
                onSubmit={this.submitNewHabit}
                render={props => <HabitForm {...props}/>}
                validationSchema={yup.object().shape({
                    name: yup
                        .string()
                        .required(),
                    type: yup
                        .string()
                        .required()
                })}
            />
        );
  }
}

export default compose(
    withNavigation,
    CreateHabit,
)(CreateHabitForm)

