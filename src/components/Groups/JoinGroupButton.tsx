import React from 'react';
import { Button, ButtonText } from '../basic';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/core';

const JoinGroupButton = () => {
  const { navigate } = useNavigation();

  return (
    <Button onPress={() => navigate('CreateGroup')} style={styles.joinGroupb}>
      <ButtonText>Join Group</ButtonText>
    </Button>
  );
};

const styles = StyleSheet.create({
  joinGroupb: {
    backgroundColor: '#E6B43C',
  },
});

export default JoinGroupButton;
