import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const COMPLETE_HABIT = gql`
  mutation completeHabit($item_id: String!, $recurrence: String!) {
    completeHabit(item_id: $item_id, recurrence: $recurrence)
  }
`;

export default graphql(COMPLETE_HABIT);
