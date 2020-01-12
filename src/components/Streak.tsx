import React from 'react';
import { Text } from 'react-native';
import _ from 'lodash';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_USER_STREAK = gql`
  query getUserStreak {
    getUserStreak {
      username
      user_id
      score
    }
  }
`;

const Streak = () => {
  const { data, error, loading } = useQuery(GET_USER_STREAK);
  if (loading) return <Text>Loading...</Text>;
  if (error) {
    return <Text>Error getting streak.</Text>;
  }

  return <Text>{`${data.getUserStreak.score || 0}`}</Text>;
};

export default Streak;
