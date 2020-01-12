import React, { useState } from 'react';
import { Fab } from 'native-base';
import { useNavigation } from '@react-navigation/core';
import { PlusIcon } from '@src/assets/svgs';

import { Platform, StyleSheet } from 'react-native';

const CreateButtonFAB = ({ refetch }) => {
  const { navigate } = useNavigation();
  const [active, setActive] = useState(true);

  return (
    <Fab
      active={active}
      direction="up"
      style={styles.fab}
      position="bottomRight"
      onPress={() =>
        navigate('CreateHabit', {
          refetch,
        })
      }>
      <PlusIcon width={24} fill="white" />
    </Fab>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5067FF',
  },
});

export default CreateButtonFAB;
