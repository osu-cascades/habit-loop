import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import { useMutation, gql } from '@apollo/client';

const registerForPushNotificationsAsync = async (props) => {
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
}

const REGISTER_PUSH_NOTIFICATION = gql`
    mutation registerPushNotification($token: String!){
        registerPushNotification(token: $token)
    }
`;

const PushNotification = (props) => {

  console.log(props);

  const [notification, setNotification] = useState({});
  const [user, setUser] = useState(props.user);
  const [registerToken, { data, loading, error }] = useMutation(REGISTER_PUSH_NOTIFICATION);

  const userToken = async () => {
    const token = await registerForPushNotificationsAsync(props);
    if (token) {
      try {
        await registerToken(token);
        console.log(`Successfully submitted new token ${token}`);
      } catch (err) {
        console.error(`Error submitting new token: ${err}`);
      }
    }
    Notifications.addListener(_handleNotification);
  };

  useEffect(() => {
    userToken()
  }, []
  );

  const _handleNotification = notification => {
    //this.setState({ notification });
    setNotification(notification);
  };

  return (
    <View>
      <Text>Origin: {setNotification.origin}</Text>
      <Text>Data: {JSON.stringify(setNotification.data)}</Text>
    </View>
  );
}

export default PushNotification;