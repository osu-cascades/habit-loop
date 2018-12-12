import React, { Component } from 'react';
import { Container, Form, Item, Input, Button } from 'native-base';
import {
    Text,
} from 'react-native';
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";
import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import { withNavigation } from 'react-navigation';

const CREATE_HABIT = gql`
    mutation createHabit($user_id: String!, $input: HabitInput){
        createHabit(user_id: $user_id, input: $input){
            name
        }       
    }
`;

export class CreateHabitForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_id: 123,
            name: 'Apollo',
            types: ['React.js'],
        }
    }

    // Send request to lambda and go back
    createHabit = async () => {


    }

    submitNewHabit = createHabit => {
        console.log(createHabit)
        const newHabit = {
            variables: {
                user_id: this.state.user_id,
                input: {
                    habit_id: uuidv4(),
                    user_id: this.state.user_id,
                    created_at: new Date(),
                    name: this.state.name,
                    type: this.state.type,
                }
            }
        }
        createHabit(newHabit);
        this.props.navigation.goBack();

    }

    render() {
        return (
                <Mutation mutation={CREATE_HABIT}>
                    {(createHabit, { data }) => (
                    <Container>
                        <Form>
                            <Item>
                                <Input placeholder="Name" />
                            </Item>
                            <Item last>
                                <Input placeholder="Type"/>
                            </Item>
                            <Button onPress={() => this.submitNewHabit(createHabit)}>
                                <Text>Add New Habit</Text>
                            </Button>
                        </Form>
                    </Container>
                    )}
                </Mutation>
               
        );
  }
}

export default withNavigation(CreateHabitForm);
