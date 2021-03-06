import React, { Component } from 'react';

import Streak from './Streak';

import { View, FlameImgBg, Text } from './styling/StreakImageStyles';
import { Image, ImageBackground } from 'react-native';

const StreakImage = () => {
  return (
    <View>
      <FlameImgBg source={require('../assets/images/nuggets.png')}>
        <Text adjustsFontSizeToFit={true} numberOfLines={1}>
          <Streak />
        </Text>
      </FlameImgBg>
    </View>
  );
};

export default StreakImage;
