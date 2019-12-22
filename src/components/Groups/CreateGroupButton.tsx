import React from 'react';
import { Button, ButtonText } from '../basic';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const CreateGroupButton = () => {
  const { navigate } = useNavigation();

  return (
    <Button onPress={() => navigate('CreateGroup')} style={styles.createGroupb}>
      <ButtonText>Create Group</ButtonText>
    </Button>
  );
};

const styles = StyleSheet.create({
  createGroupb: {
    backgroundColor: '#E6B43C',
  },
});

export default CreateGroupButton;
