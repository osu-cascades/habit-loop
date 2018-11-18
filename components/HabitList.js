import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "React Native", content: "Lorem ipsum dolor sit amet" },
  { title: "GraphQL", content: "Lorem ipsum dolor sit amet" },
  { title: "Apollo", content: "Lorem ipsum dolor sit amet" }
];
export default class HabitList extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }
}