import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Container
} from 'native-base';
import { Permissions, Notifications } from 'expo';
import { compose } from 'react-apollo';
import { RegisterPushNotification } from '../data/';

async function registerForPushNotificationsAsync(props) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );

    let finalStatus = existingStatus;
  
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
  
    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }
  
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token, 'HELLO')
      const registerToken = {
        variables: {
            token: `${token}`,
        }
      }
  
      return props.mutate(registerToken);
}

class PushNotification extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        notification: {},
        user: props.user
      }
    }

    componentDidMount() {
        registerForPushNotificationsAsync(this.props);
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = notification => {
      this.setState({ notification })
    }

    render() {
      console.log(this.state.notification, 'notification');
      return (
        <View>
          <Text>Origin: {this.state.notification.origin}</Text>
          <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
        </View>
      )
    }
}

export default compose (
  RegisterPushNotification
)(PushNotification);
