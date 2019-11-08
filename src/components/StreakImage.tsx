import React, { Component } from 'react';
import {
    Text,
    ImageBackground
} from 'react-native';

import {
    View
} from 'native-base';

import {
    Streak
} from '../components'

import { styles } from './styling/StreakImageStyles'

const StreakImage = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground
                source={require('../assets/images/cbtFlameIcon-sml.png')}
                style={styles.flameIconImage}
            >
                <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                    style={styles.streakNum}
                >
                    <Streak />
                </Text>
            </ImageBackground>
        </View>
    );
}

export default StreakImage;