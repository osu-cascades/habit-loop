import React, { Component } from "react";
import {
  Text,
} from 'react-native';
import { Container, Header, Content, Accordion } from "native-base";
import CreateHabitButton from '../components/CreateHabitButton';
import { Query } from 'react-apollo';
import gql from "graphql-tag";

const GET_ALL_HABITS = gql`
  query getAllHabits($user_id: String!) {
    getAllHabits(user_id: $user_id) {
      habit_id
      name
      type
      created_at
      user_id
    }
  }
`;

export const Habits = () => (
    <Query query={GET_ALL_HABITS} variables={{ user_id: "123" }}>
        {({ loading, error, data }) => {
        if (loading) return <Text>"Loading..."</Text>
        if (error) return (<Text>`Error! ${error.message}`</Text>)

        console.log(data.getAllHabits)
        const dataArray = data.getAllHabits.map(item => {
          return { 
            title: item.name,
            content: 'WIAUGIUAW'
          }
         })
        console.log(dataArray)
        return (
          <Content padder>
            <Accordion dataArray={ dataArray } expanded={0}/>
            <CreateHabitButton />
          </Content>
        );
        }}
    </Query>
);



const dataArray = [
  { title: "React Native", content: "Lorem ipsum dolor sit amet" },
  { title: "GraphQL", content: "Lorem ipsum dolor sit amet" },
  { title: "Apollo", content: "Lorem ipsum dolor sit amet" }
];
export default class HabitList extends Component {
  render() {
    return (
        <Habits />
    );
  }
}