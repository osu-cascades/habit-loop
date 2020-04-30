import React, { useState } from 'react';
//import { Fab } from 'native-base';
import { useNavigation } from '@react-navigation/core';
import { PlusIcon } from '@src/assets/svgs';

import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

const CreateButtonFAB = ({ refetch }) => {
  const { navigate } = useNavigation();
  const [active, setActive] = useState(true);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigate('CreateHabit', {
          refetch,
        })
      }
      style={styles.fab}>
      <PlusIcon width={24} fill="white" />
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#E6B43C',
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 50,
  },
});

export default CreateButtonFAB;
