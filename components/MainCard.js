import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export default class MainCard extends Component {
  render() {
    return (
        <Card>
          <CardItem>
            <Body>
              <Text>
                  {this.props.text}
              </Text>
            </Body>
          </CardItem>
        </Card>
    );
  }
}