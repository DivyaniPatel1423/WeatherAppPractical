import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherCardProps {
    temperature: number;
    humidity: number;
    windSpeed: number;
    description: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, humidity, windSpeed, description }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Current Weather</Text>
            <Text style={styles.info}>Temperature: {temperature} °C</Text>
            <Text style={styles.info}>Humidity: {humidity} %</Text>
            <Text style={styles.info}>Wind Speed: {windSpeed} m/s</Text>
            <Text style={styles.description}>Description: {description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#555',
    },
});

export default WeatherCard;
