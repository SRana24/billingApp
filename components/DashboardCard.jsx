import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DashboardCard = ({ name = 'User', totalClients = 0 }) => {
    return (
        <LinearGradient
            colors={['#1b3b0f', '#274e13', '#3f7d20']}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <Text style={styles.title}>Welcome, {name}!</Text>
            <Text style={styles.subtitle}>Dashboard</Text>
            <Text style={styles.clients}>Total Clients: <Text style={{ fontWeight: 800 }}>{totalClients}</Text> </Text>
            <Text style={styles.clientStatus}>
                Active:{totalClients}  | Inactive: 0
            </Text>

            <Text style={styles.motivation}>Let's help your {totalClients} clients grow today!</Text>
            <Text style={styles.infoNote}>Scroll down to view all your clients</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 16,
        marginTop: 16,
        padding: 20,
        borderRadius: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        marginBottom: 6
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        color: '#e0e0e0',
        fontSize: 16,
        marginBottom: 6,
    },
    clients: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    motivation: {
        color: '#aaffaa',
        fontSize: 14,
        marginTop: 10,
        fontStyle: 'italic',
    },
    clientStatus: {
        color: '#d0ffd0',
        fontSize: 15,
        marginTop: 4,
        fontWeight: 600
    },
    infoNote: {
        color: '#c0c0c0',
        fontSize: 14,
        marginTop: 12,
        fontStyle: 'italic',
    },



});

export default DashboardCard;
