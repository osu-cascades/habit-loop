
import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const SIGNUP = gql`
    mutation signup($input: SignupInput!){
        signup(input: $input)
    }
`;

export default graphql(SIGNUP)