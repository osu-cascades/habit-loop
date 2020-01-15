import React from 'react';
import { Text } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { Loading } from '@src/components';
import { TopStreakBoard } from './Board';

const GET_TOP_STREAKS = gql`
  query getTopStreaks {
    getTopStreaks {
      username
      user_id
      score
    }
  }
`;

const TopStreakList = () => {
  const { data, error, loading, refetch, networkStatus } = useQuery(GET_TOP_STREAKS, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <Loading />;
  if (error) return <Text>{error.message}</Text>;
  const items = data.getTopStreaks.map((item, key) => Object.assign(item, { key: key.toString() }));

  return <TopStreakBoard items={items} networkStatus={networkStatus} refetch={refetch} />;
};

export default TopStreakList;
