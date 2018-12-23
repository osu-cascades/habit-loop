import React, { Component } from 'react';
import { Icon, Fab } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Platform } from 'react-native';

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
          containerStyle={{ }}
          style={{ backgroundColor: '#5067FF' }}
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

export default withNavigation(CreateButtonFAB)