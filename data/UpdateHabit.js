import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const UPDATE_HABIT = gql`
    mutation updateHabit($input: UpdateHabitInput!){
        updateHabit(input: $input){
            habit_name
        }
    }
`;

export default graphql(UPDATE_HABIT)