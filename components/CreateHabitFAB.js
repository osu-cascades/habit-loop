import React, { Component } from 'react';
import { Icon, Fab } from 'native-base';
import { withNavigation } from 'react-navigation';
import { 
  Platform, 
  StyleSheet 
} from 'react-native';

class CreateButtonFAB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'true'
    };
  }

  render() {
    return (  
        <Fab
          active={this.state.active}
          direction="up"
          style={styles.fab}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('CreateHabit', {
              refetch: this.props.refetch
            })}>
          <Icon name={
            Platform.OS === 'ios'
              ? 'ios-add'
              : 'md-add'} 
          />
        </Fab>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5067FF',
  }
})

export default withNavigation(CreateButtonFAB)