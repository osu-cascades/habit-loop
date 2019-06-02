import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const DELETE_HABIT = gql`
    mutation deleteHabit($item_id: String!){
        deleteHabit(item_id: $item_id,){
            habit_name
        }
    }
`;

export default graphql(DELETE_HABIT)