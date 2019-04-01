import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const COMPLETE_HABIT = gql`
    mutation completeHabit($input: HabitInput){
        completeHabit(input: $input){
            name
        }
    }
`;

export default graphql(COMPLETE_HABIT)