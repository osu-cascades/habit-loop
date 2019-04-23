import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const COMPLETE_HABIT = gql`
    mutation completeHabit($user_id: String!, $habit_id: String!, $recurrence: String!){
        completeHabit(user_id: $user_id, habit_id: $habit_id, recurrence: $recurrence)
    }
`;

export default graphql(COMPLETE_HABIT)