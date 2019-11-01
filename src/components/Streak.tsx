import React from 'react';
import { Text } from 'react-native';
import _ from 'lodash';
import { compose } from 'react-apollo';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { GetUserStreak } from '@src/data';
import { renderWhileLoading, renderForError } from '@src/components';

const Streak = props => <Text>{`Your current streak is ${props.data.getUserStreak.score || 0}`}</Text>;

const GET_USER_STREAK = gql`
  query getUserStreak {
    getUserStreak {
      username
      user_id
      score
    }
  }
`;

const StreakHook = () => {
  const { data, error, loading } = useQuery(GET_USER_STREAK);
  if (loading) return <Text>Loading...</Text>;
  if (error) {
    return <Text>Error getting streak.</Text>;
  }

  return <Text>{`${data.getUserStreak.score || 99}`}</Text>;
};

export default StreakHook;

// export default compose(
//   GetUserStreak,
//   renderWhileLoading(),
//   renderForError(),
// )(Streak);
