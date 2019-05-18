import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const GET_GROUP_LEADERBOARD = gql`
  query getGroupLeaderboard { 
    getGroupLeaderboard {
      username
      user_id
      score
    }
  }
`;

export default graphql(GET_GROUP_LEADERBOARD,
  {
    options: {
      notifyOnNetworkStatusChange: true,
    },
    props: ({ data }) => ({
      loadingTwo: data.loading,
      groupLeaderboard: data.getGroupLeaderboard,
      glError: data.error,
    })
})