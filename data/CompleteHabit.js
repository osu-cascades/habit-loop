import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const COMPLETE_HABIT = gql`
    mutation completeHabit($habit_id: String!, $recurrence: String!){
        completeHabit(habit_id: $habit_id, recurrence: $recurrence)
    }
`;

export default graphql(COMPLETE_HABIT)