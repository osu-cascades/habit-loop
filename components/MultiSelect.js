import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';

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

const Types = () => (
     types.map(type => <Picker.Item label={type.name} value={type.id} />)
)

export default class MultiSelect extends Component {
    constructor(props){
        super(props);

        this.state = {
            selected: undefined,
        }
    }

    handleValueChange = value => {
        this.setState({ selected: value })
        this.props.onSelectItem(value);
    }

    render(){
        return (
              <Picker
                mode="dropdown"
                style={{ width: undefined }}
                placeholder="Type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected}
                onValueChange={this.handleValueChange}
              >
                <Types/>
              </Picker>
        )
    }
}