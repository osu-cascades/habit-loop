import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const REGISTER_PUSH_NOTIFICATION = gql`
    mutation registerPushNotification($token: String!){
        registerPushNotification(token: $token)
    }
`;

export default graphql(REGISTER_PUSH_NOTIFICATION);
