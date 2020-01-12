import React from 'react';
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
  const { data, loading } = useQuery(GET_TOP_STREAKS);

  if (loading) return <Loading />;

  const items = data.getTopStreaks.map((item, key) => Object.assign(item, { key: key.toString() }));

  return <TopStreakBoard items={items} networkStatus={data.networkStatus} refetch={data.refetch} />;
};

export default TopStreakList;
