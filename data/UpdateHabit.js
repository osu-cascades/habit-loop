import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const UPDATE_HABIT = gql`
    mutation updateHabit($input: HabitInput){
        updateHabit(input: $input){
            name
        }
    }
`;

export default graphql(UPDATE_HABIT)