import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { colorConstant } from '../../assets/styles';

const Loader = ({ message = 'Loading...', color = colorConstant.secondaryDarkGreen, size = 'large' }) => {
    return (
        <View style={styles.centered}>
            <ActivityIndicator size={size} color={color} />
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        marginTop: 8,
        fontSize: 16,
        color: colorConstant.secondaryDarkGreen,
    },
});

export default Loader;
