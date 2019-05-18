import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const JOIN_GROUP = gql`
    mutation joinGroup($item_id: String!){
        joinGroup(item_id: $item_id)
    }
`;

export default graphql(JOIN_GROUP)