import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.heading}>CBT Training Loop</Text>
      <Text style={styles.paragraph}>[Insert Logo here]</Text>
      <View style={styles.login}>
      <Text style={styles.login.text}>
      Username:
      </Text>
      <Text style={styles.login.text}>
      Password:
      </Text>
      </View>
        <Card>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    fontSize: '30px',
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  login: {
    flex: 1,
    width: '200px',
    padding:'100px',
    border: '1px solid black',
    textAlign:'left',
    text: {
      width:'50%',
      textAlign: 'left',
      fontSize: '20px',
    }
  }
});
