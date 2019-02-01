import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const DELETE_HABIT = gql`
    mutation deleteHabit($habit_id: String!, $created_at: String!){
        deleteHabit(habit_id: $habit_id, created_at: $created_at)
    }
`;

export default graphql(DELETE_HABIT)