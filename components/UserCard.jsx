import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colorConstant } from '../assets/styles';

const UserCard = ({ item }) => {
    const fullName = `${item.name.title} ${item.name.first} ${item.name.last}`;
    const age = item.dob.age;
    const phone = item.phone;
    const email = item.email;
    const location = `${item.location.city}, ${item.location.country}`;

    return (
        <View style={styles.card}>
            <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />
            <View style={styles.userInfo}>
                <Text style={styles.name}>{fullName}</Text>
                <Text style={styles.detail}>Age: {age}</Text>

                <View style={styles.detailRow}>
                    <Image source={require('../assets/images/call.png')} style={styles.icon} />
                    <Text style={styles.detailText}>{phone}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Image source={require('../assets/images/email.png')} style={styles.icon} />
                    <Text style={styles.detailText}>{email}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Image source={require('../assets/images/location.png')} style={styles.icon} />
                    <Text style={styles.detailText}>{location}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 4,
        margin: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 12,
    },
    userInfo: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    detail: {
        fontSize: 14,
        color: colorConstant.secondaryDarkGreen,
        marginBottom: 4,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    icon: {
        width: 16,
        height: 16,
        marginRight: 12,

        tintColor: colorConstant.secondaryDarkGreen,
    },
    detailText: {
        fontSize: 13,
        color: colorConstant.secondaryDarkGreen,
    },
});

export default UserCard;
