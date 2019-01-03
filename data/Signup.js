
import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const SIGNUP = gql`
    mutation signup($input: UserInput){
        signup(input: $input)
    }
`;

export default graphql(SIGNUP)