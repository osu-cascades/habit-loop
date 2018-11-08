import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Query } from 'react-apollo';
import gql from "graphql-tag";

const GET_PEOPLE = gql`{
    allPeople {
      id
      name
      gender
      homeworld
    }
  }
  `;
  
export const People = () => (
    <Query query={GET_PEOPLE}>
        {({ loading, error, data }) => {
        if (loading) return <Text>"Loading..."</Text>
        if (error) return (<Text>`Error! ${error.message}`</Text>)

        return (
            <View>
            {data.allPeople.map(p => (
                <Text key={p.id}>{p.name}</Text>
            ))}
            </View>
        );
        }}
    </Query>
);

