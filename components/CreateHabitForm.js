import React, { Component } from 'react';
import { Container, Form, Item, Input, Button, Picker } from 'native-base';
import {
    Text,
} from 'react-native';
import { compose } from 'react-apollo';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import { withNavigation } from 'react-navigation';
import { CreateHabit } from '../data/';
import MultiSelect from './MultiSelect';

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

export class CreateHabitForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_id: "123",
            name: '',
            type: [],
            selected: undefined
        }
    }

    submitNewHabit = async () => {
        const refetch = this.props.navigation.getParam('refetch', () => console.log('wtf'));
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
        
        // Wait for server to return result before refetching and going back
        try {
            await this.props.mutate(newHabit);
        } catch (err) {
            console.log(err);
        }
        refetch();
        this.props.navigation.goBack();
    }

    
    onSelectItem = newType => {
        this.setState({ type: [...this.state.type, newType], selected: newType });
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
                    <Item picker>
                        {/* <MultiSelect 
                            onSelectItem={this.onSelectItems}
                        /> */}
                        <Picker
                            mode="dropdown"
                            style={{ width: undefined }}
                            placeholder="Type"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected}
                            onValueChange={this.onSelectItem}
                        >
                            {types.map(type => <Picker.Item label={type.name} value={type.name} key={type.id} />)}
                        </Picker>
                    </Item>
                    <Button
                        warning
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

