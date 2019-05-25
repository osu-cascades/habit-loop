import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const JOIN_GROUP = gql`
    mutation joinGroup($item_id: String!, $group_name: String!){
        joinGroup(item_id: $item_id, group_name: $group_name)
    }
`;

export default graphql(JOIN_GROUP)