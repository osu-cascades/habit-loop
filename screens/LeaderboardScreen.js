import React, {Fragment} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container } from "native-base";
import LeaderboardTabs from '../components/LeaderboardTabs/LeaderboardTabs';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Leaderboard',
  };

  render() {
    return (
      <Container>
        <LeaderboardTabs />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
