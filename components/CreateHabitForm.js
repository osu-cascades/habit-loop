import React, { Component } from 'react';
import { Container, Form, Item, Input, Button, Label, Header } from 'native-base';
import {
    Text,
} from 'react-native';
import { Mutation, compose } from 'react-apollo';
import gql from "graphql-tag";
import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import { withNavigation } from 'react-navigation';
import { CreateHabit } from '../data/';
import MultiSelect from './MultiSelect';

export class CreateHabitForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_id: "123",
            name: '',
            types: [],
        }
    }

    submitNewHabit = () => {
        const refetch = this.props.navigation.getParam('refetch', () => console.log('wtf'));
        const newHabit = {
            variables: {
                user_id: this.state.user_id,
                input: {
                    habit_id: uuidv4(),
                    user_id: this.state.user_id,
                    created_at: new Date(),
                    name: this.state.name,
                    types: this.state.types,
                }
            }
        }
        this.props.mutate(newHabit);
        refetch();
        this.props.navigation.goBack();
    }

    
    onSelectedItemsChange = types => {
        this.setState({ types });
    };

    render() {
        return (
            <Container>
                <Form>
                    <Item>
                        <Input
                            placeholder="Name" 
                            onChangeText={name => this.setState({name})}
                        />
                    </Item>
                    <Item last>
                        <MultiSelect 
                            onSelectedItemsChange={this.onSelectedItemsChange}
                            selectedItems={this.state.types}
                        />
                    </Item>
                    <Button
                        block
                        onPress={this.submitNewHabit}
                    >
                        <Text>
                            Create New Habit
                        </Text>
                    </Button>
                </Form>
            </Container>
        );
  }
}

export default compose(
    withNavigation,
    CreateHabit,
)(CreateHabitForm)

