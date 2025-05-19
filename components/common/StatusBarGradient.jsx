// components/StatusBarGradient.js
import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StatusBarGradient = () => {
    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight;

    return (
        <View style={[styles.gradientContainer, { height: STATUSBAR_HEIGHT }]}>
            <LinearGradient
                colors={['#1b3b0f', '#274e13', '#3f7d20']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={StyleSheet.absoluteFill}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    gradientContainer: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },
});

export default StatusBarGradient;
