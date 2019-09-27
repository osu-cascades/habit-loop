import { graphql } from 'react-apollo';
import gql from "graphql-tag";

const GET_USER_GROUPS = gql`
  query getUserGroups { 
    getUserGroups {
      item_id
      group_name
    }
  }
`;

export default graphql(GET_USER_GROUPS,
  {
    options: {
      notifyOnNetworkStatusChange: true,
    }
})