import React from 'react';
import { 
    Text,
    ListItem,
} from 'native-base';
import { FlatList, } from 'react-native';
import { compose } from 'react-apollo';
import { 
  GetUserGroups,
 } from '../../data';
import { 
  Loading,
} from '../';

class Groups extends React.Component {
    render() {
        if (this.props.data.loading) {
            return <Loading/>
          } else if (this.props.data.error) {
            return <Text>`Error Loading Data! ${this.props.data.error.message}`</Text>
          }
      
        const items = this.props.data.getUserGroups.map((item) => Object.assign(item, { key: item.item_id.toString() }));
        
        return (
            <FlatList 
                data={items}
                onRefresh={this.props.data.refetch}
                refreshing={this.props.data.networkStatus === 4 }
                renderItem={(item) => 
                    <ListItem onPress={() => this.props.handleGroupChange(item.item.group_name, item.item.item_id)}>
                        <Text>{(item.item.group_name)}</Text>
                    </ListItem>
                }
            >
            </FlatList>
        );
    }
}

export default compose(
    GetUserGroups,
)(Groups);