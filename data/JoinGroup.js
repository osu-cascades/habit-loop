import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const JOIN_GROUP = gql`
    mutation JOIN_GROUP($input: GroupInput){
        JOIN_GROUP(input: $input){
            group_name
        }
    }
`;

export default graphql(JOIN_GROUP)