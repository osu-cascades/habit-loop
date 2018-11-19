import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Badge, Right } from 'native-base';
import { StyleSheet } from 'react-native';

export default class LeaderboardList extends Component {
  render() {
    var items = [
      'Simon Mignolet',
      'Nathaniel Clyne',
      'Dejan Lovren',
      'Mama Sakho',
      'Emre Can'
    ];
    return (
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item, sectionID, rowID) =>
              <ListItem>
                <Text>{item}</Text>
                <Badge style={styles.badge}><Text>{rowID}</Text></Badge>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    badge: {
    },
  });
  