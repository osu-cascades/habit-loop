import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const GET_HABITS = gql`
  query getHabits { 
    getHabits {
      item_id
      habit_name
      type
      created_at
      user_id
      completed_today
      recurrence
    }
  }
`;

export default graphql(GET_HABITS,
  {
    options: {
      notifyOnNetworkStatusChange: true,
  },
})