import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const GET_ALL_HABITS = gql`
  query getAllHabits($user_id: String!) {
    getAllHabits(user_id: $user_id) {
      habit_id
      name
      type
      created_at
      user_id
    }
  }
`;

export default graphql(GET_ALL_HABITS)