import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const CREATE_GROUP = gql`
    mutation createGroup($group_name: String!){
        createGroup(group_name: $group_name)
    }
`;

export default graphql(CREATE_GROUP)