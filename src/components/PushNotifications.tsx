import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import { useMutation, gql } from '@apollo/client';

const registerForPushNotificationsAsync = async props => {
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return;
  }

  let token = await Notifications.getExpoPushTokenAsync();
  const registerToken = {
    variables: {
      token: `${token}`,
    },
  };

  return registerToken;
};

const REGISTER_PUSH_NOTIFICATION = gql`
  mutation registerPushNotification($push_token: String!) {
    registerPushNotification(push_token: $push_token) {
      reminder
    }
  }
`;

const PushNotification = props => {
  const [notification, setNotification] = useState({});
  const [user, setUser] = useState(props.user);
  const [registerToken, { data, loading, error }] = useMutation(REGISTER_PUSH_NOTIFICATION);

  const userToken = async () => {
    const push_notification = await registerForPushNotificationsAsync(props);
    if (push_notification) {
      const token = push_notification.variables.token;
      const params = {
        variables: {
          push_token: token,
        },
      };
      console.log(token);
      try {
        await registerToken(params);
        console.log(`Successfully submitted new token ${token}`);
      } catch (err) {
        console.error(`Error submitting new token: ${err}`);
      }
    }
    Notifications.addListener(_handleNotification);
  };

  useEffect(() => {
    userToken();
  }, []);

  const _handleNotification = notification => {
    //this.setState({ notification });
    setNotification(notification);
  };

  return null;
};

export default PushNotification;
