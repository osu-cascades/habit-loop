import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';

export default class ResourceList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Get crap done.</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Get training in everyday.</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Get MONEY $$$</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}