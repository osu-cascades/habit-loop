import React, { Component } from 'react';

import {
    Streak
} from '../components';

import { View, FlameImgBg, Text } from './styling/StreakImageStyles2';

const StreakImage = () => {
    return (
        <View>
            <FlameImgBg source={require('../assets/images/cbtFlameIcon-sml.png')}>
                <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}>
                    <Streak />
                </Text>
            </FlameImgBg>
        </View>
    );
}

export default StreakImage;