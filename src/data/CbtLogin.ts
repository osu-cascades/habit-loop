import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const CBT_LOGIN = gql`
    mutation cbtLogin($email: String!, $password: String!){
        cbtLogin(email: $email, password: $password)
    }
`;

export default graphql(CBT_LOGIN)