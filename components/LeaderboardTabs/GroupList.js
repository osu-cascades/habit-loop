import React, { Component } from 'react';
import GroupBoard from './GroupBoard';
import Groups from './Groups';

class GroupList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            groupName: undefined,
            itemId: undefined
        }
    }

    handleGroupChange = (name, id) => {
        this.setState({
            groupName: name,
            itemId: id,
        })
    }

    render() {
        return (
            <>
                <Groups handleGroupChange={this.handleGroupChange}/>
                {this.state.groupName && <GroupBoard 
                    groupName={this.state.groupName}
                    itemId={this.state.itemId}
                />}
            </>
        );
    }
}


export default GroupList;
