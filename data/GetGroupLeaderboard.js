import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const GET_GROUP_LEADERBOARD = gql`
  query getGroupLeaderboard { 
    getGroupLeaderboard {
      username
      user_id
      streak
    }
  }
`;

export default graphql(GET_GROUP_LEADERBOARD,
  {
    options: {
      notifyOnNetworkStatusChange: true,
    }
})