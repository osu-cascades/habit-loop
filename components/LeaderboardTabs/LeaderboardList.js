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
      'Emre Can',
      'Nathan Hil'
    ];
    
    return (
      <Container>
        <Content>
          <List dataArray={items}
            renderRow={(item, sectionID, rowID) =>
              <ListItem style={styles.listItem}>
                <Badge style={styles.badge}><Text>{rowID}</Text></Badge>
                <Text style={styles.listItemText}>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    items: {
      display: 'flex',
      alignItems: 'flex-start',
      width: '100%'
    },
    listItem: {
      width: '100%',
      justifyContent: 'flex-start',
      borderRightColor: '#222222',
      borderRightWidth: 5
    },
    badge: {
      backgroundColor: '#F78E2A',
      marginRight: '5%'
    },
    listItemText: {
      alignSelf: 'flex-start',
    }
  });
  