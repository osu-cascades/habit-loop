
import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const CREATE_HABIT = gql`
    mutation createHabit($user_id: String!, $input: HabitInput){
        createHabit(user_id: $user_id, input: $input){
            name
        }
    }
`;

export default graphql(CREATE_HABIT)