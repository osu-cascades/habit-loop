import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const GET_TOP_STREAKS = gql`
  query getTopStreaks { 
    getTopStreaks {
      username
      user_id
      score
    }
  }
`;

export default graphql(GET_TOP_STREAKS,
  {
    options: {
      notifyOnNetworkStatusChange: true,
    },
    props: ({ data }) => ({
      loadingOne: data.loading,
      topStreaks: data.getTopStreaks,
      tsError: data.error,
    })
})