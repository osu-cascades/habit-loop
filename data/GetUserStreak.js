import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const GET_USER_STREAK = gql`
  query getUserStreak { 
    getUserStreak {
      username
      user_id
      score
    }
  }
`;

export default graphql(GET_USER_STREAK,
  {
    options: {
      notifyOnNetworkStatusChange: true,
  },
})