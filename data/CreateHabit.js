
import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const CREATE_HABIT = gql`
    mutation createHabit($input: HabitInput){
        createHabit(input: $input){
            name
        }
    }
`;

export default graphql(CREATE_HABIT)