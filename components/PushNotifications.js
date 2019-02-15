import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Permissions, Notifications } from 'expo';
import { compose } from 'react-apollo';
import { RegisterPushNotifications } from '../data';

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
    const registerToken = {
        variables: {
            token: `${token}`,
        }
      }
  
    return registerToken;
}

class PushNotification extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        notification: {},
        user: props.user
      }
    }

    async componentDidMount() {
        const token = await registerForPushNotificationsAsync(this.props);
        if (token) {
          try{
            await this.props.mutate(token);
            console.log(`Successfully submitted new token ${token}`);
          } catch (err) {
            console.log(`Error submitting new token: ${err}`);
          }
        }
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
    }

    _handleNotification = notification => {
      this.setState({ notification })
    }

    render() {
      return (
        <View>
          <Text>Origin: {this.state.notification.origin}</Text>
          <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
        </View>
      )
    }
}

export default compose (
  RegisterPushNotifications
)(PushNotification);
