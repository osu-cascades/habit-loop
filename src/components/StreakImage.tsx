import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';

import {
    View
} from 'native-base';

import {
    Streak
} from '../components'

export class StreakImage extends React.Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground
                    source={require('../assets/images/cbtFlameIcon-sml.png')}
                    style={styles.flameIconImage}
                >
                    <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={styles.streakNum}>
                        <Streak />
                    </Text>
                </ImageBackground>
            </View>
        );
    }
}

export default StreakImage;

const styles = StyleSheet.create({
    flameIconImage: {
        width: 100,
        height: 143,
        position: 'relative',
        textAlign: 'center',
        top: 0,
        left: 0,
    },

    streakNum: {
        fontSize: 25,
        textAlignVertical: 'center',
        alignSelf: 'center',
        marginTop: 78,
    }
})